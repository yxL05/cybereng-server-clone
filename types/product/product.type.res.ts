import { MediaUrlResponse, toMediaUrlResponse } from "./mediaUrl/mediaUrl.type.res.js"
import { ProductEager } from "./product.type.js"
import { DescSpecResponse, toProductSpecResponse } from "./productSpec/productSpec.type.res.js"

export interface ProductResponse {
  id: number,
  name: string,
  price: number,
  pageName: string,
  descShort: string,
  descLong1: string,
  descLong2: string,
  inStock: boolean,
  descSpecList: DescSpecResponse[], 
  mediaUrlList: MediaUrlResponse[]
}

export const toProductResponse = (product: ProductEager): ProductResponse => {
  return {
    ...product.toJSON(),
    descSpecList: product.descSpecList?.map(toProductSpecResponse),
    mediaUrlList: product.mediaUrlList?.map(toMediaUrlResponse)
  }
}