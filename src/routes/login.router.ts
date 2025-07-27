import express from "express";
import jwt from "jsonwebtoken";
import { validateRequestType } from "../middleware/validation/validateRequestType.js";
import { Login, LoginSchema } from "../../types/login/login.type.js";
import { validateLogin } from "../controllers/login.controller.js";
import { getEnv } from "../util/dotenv.js";

const router = express.Router();

router.post("/", validateRequestType(LoginSchema), async (req, res) => {
  const login: Login = req.body;
  if (!await validateLogin(login)) return res.sendStatus(401);

  const DURATION_MS: number = parseInt(getEnv('JWT_DURATION_MS')); // 3h

  const token = jwt.sign({ username: login.username }, getEnv("JWT_SECRET"), {
    expiresIn: DURATION_MS
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: DURATION_MS
  })

  res.sendStatus(200);
})

export default router;