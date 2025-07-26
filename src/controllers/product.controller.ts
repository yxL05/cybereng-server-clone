import { ProductEager } from "../../types/product/product.type.js";
import MediaUrl from "../models/product/MediaUrl.js";
import Product from "../models/product/Product.js";
import ProductSpec from "../models/product/ProductSpec.js";

export const getAllProducts = async (): Promise<ProductEager[]> => {
  return await Product.findAll({
    include: [
      {
        model: ProductSpec,
        as: 'descSpecList'
      },
      {
        model: MediaUrl,
        as: 'mediaUrlList'
      }
    ]
  }) as ProductEager[];
}