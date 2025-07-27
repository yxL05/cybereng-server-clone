import { NextFunction, Response } from "express"
import { RequestWithCookies } from "../../../types/admin/req.cookies.js"
import jwt from 'jsonwebtoken';
import { getEnv } from "../../util/dotenv.js";

export const validateJwt = (req: RequestWithCookies, res: Response, next: NextFunction) => {
  const token = req.cookies?.jwt;
  if (!token) return res.sendStatus(401);

  try {
    jwt.verify(token, getEnv('JWT_SECRET'));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (e) {
    return res.sendStatus(403);
  }

  next();
}