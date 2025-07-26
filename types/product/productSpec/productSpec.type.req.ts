import z from "zod";

export const createProductSpecSchema = z.string();

export type CreateProductSpecRequest = z.infer<typeof createProductSpecSchema>;