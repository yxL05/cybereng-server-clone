import express from 'express';
import { toProductResponse } from '../../types/product/product.type.res.js';
import { getAllProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.json(products.map((v) => toProductResponse(v)));
});

router.get("/:id", (req, res) => {
  console.log("...");
  res.end();
})

export default router;