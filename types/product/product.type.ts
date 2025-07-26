import MediaUrl from "../../src/models/product/MediaUrl.js";
import Product from "../../src/models/product/Product.js";
import ProductSpec from "../../src/models/product/ProductSpec.js";

export interface ProductEager extends Product {
  descSpecList: ProductSpec[];
  mediaUrlList: MediaUrl[];
}