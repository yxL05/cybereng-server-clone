import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateRequestType = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return res.sendStatus(400);

    req.body = parsed.data;
    next();
  }
}