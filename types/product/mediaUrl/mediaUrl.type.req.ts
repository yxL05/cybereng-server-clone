import z from "zod";

export const createMediaUrlSchema = z.object({
  isVideo: z.boolean(),
  src: z.string()
});

export type CreateMediaUrlRequest = z.infer<typeof createMediaUrlSchema>;