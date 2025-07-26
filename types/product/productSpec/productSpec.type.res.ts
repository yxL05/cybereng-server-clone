import ProductSpec from "../../../src/models/product/ProductSpec.js";

export type DescSpecResponse = string;

export const toProductSpecResponse = (productSpec: ProductSpec): DescSpecResponse => {
  return productSpec.spec;
}