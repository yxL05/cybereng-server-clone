import express from 'express';
import { validateRequestType } from '../../middleware/validation/validateRequestType.js';
import { CreateProductRequest, createProductSchema } from '../../../types/product/product.type.req.js';
import Product from '../../models/product/Product.js';
import ProductSpec from '../../models/product/ProductSpec.js';
import MediaUrl from '../../models/product/MediaUrl.js';
import { toProductResponse } from '../../../types/product/product.type.res.js';
import { getProductById } from '../../controllers/product.controller.js';

const router = express.Router();

/* I know the naming conventions here are poor at best,
but I can't be bothered to rewrite my Postman tests so it will stay that way forever. */

router.post("/createProduct", validateRequestType(createProductSchema), async (req, res) => {
  const request: CreateProductRequest = req.body;

  // Initialize foreign arrays without reference to product
  const descSpecList = request.descSpecList.map((specStr) => ProductSpec.build({ spec: specStr }));
  const mediaUrlList = request.mediaUrlList.map((value) => MediaUrl.build({ ...value }));

  // Save product with empty foreign arrays to get ID for above arrays
  const product = await Product.create({
    name: request.name,
    price: request.price,
    pageName: request.pageName,
    descShort: request.descShort,
    descLong1: request.descLong1,
    descLong2: request.descLong2,
    inStock: request.inStock,
  });
  const id = product.toJSON().id;

  // Apply FK to arrays and save
  await Promise.all(descSpecList.map((descSpec) => {
    descSpec.productId = id;
    return descSpec.save();
  }));
  await Promise.all(mediaUrlList.map((mediaUrl) => {
    mediaUrl.productId = id;
    return mediaUrl.save();
  }));

  // Update product with FK arrays
  await product.setDescSpecList(descSpecList);
  await product.setMediaUrlList(mediaUrlList);
  await product.save();

  const response = await getProductById(id);
  res.status(201).json(toProductResponse(response))
});

router.delete("/deleteProduct/:id", async (req, res) => {
  const target = await getProductById(parseInt(req.params.id));
  if (!target) return res.sendStatus(204);

  // Eliminate FK dependencies
  await Promise.all(target.descSpecList.map((descSpec) => {
    return descSpec.destroy();
  }));
  await Promise.all(target.mediaUrlList.map((mediaUrl) => {
    return mediaUrl.destroy();
  }))

  await target.destroy();
  res.sendStatus(204);
});

export default router;