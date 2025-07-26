import express from 'express';
import { toProductResponse } from '../../types/product/product.type.res.js';
import { getAllProducts, getProductById } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.json(products.map((v) => toProductResponse(v)));
});

router.get("/:id", async (req, res) => {
  const target = await getProductById(parseInt(req.params.id));
  if (!target) return res.sendStatus(404);

  res.json(toProductResponse(target));
})

export default router;