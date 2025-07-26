import z from "zod";
import { createMediaUrlSchema } from "./mediaUrl/mediaUrl.type.req.js";
import { createProductSpecSchema } from "./productSpec/productSpec.type.req.js";

export const createProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  pageName: z.string(),
  descShort: z.string(),
  descLong1: z.string(),
  descLong2: z.string(),
  inStock: z.boolean(),
  descSpecList: z.array(createProductSpecSchema),
  mediaUrlList: z.array(createMediaUrlSchema)
});

export type CreateProductRequest = z.infer<typeof createProductSchema>;