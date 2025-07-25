export interface DescSpecResponse {
  id: number,
  spec: string
}

export interface MediaUrlResponse {
  isVideo: boolean,
  src: string
}

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