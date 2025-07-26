import MediaUrl from "../../../src/models/product/MediaUrl.js";

export interface MediaUrlResponse {
  isVideo: boolean,
  src: string
}

export const toMediaUrlResponse = (mediaUrl: MediaUrl): MediaUrlResponse => {
  return {
    isVideo: mediaUrl.isVideo,
    src: mediaUrl.src
  }
} 