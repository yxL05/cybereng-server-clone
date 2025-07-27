import { Login } from "../../types/login/login.type.js";
import bcrypt from 'bcrypt';
import User from "../models/login/User.js";

export const findByUsername = async (search: string): Promise<User | null> => {
  return await User.findOne({ where: { username: search } });
}

export const validateLogin = async (request: Login): Promise<boolean> => {
  const stored = await findByUsername(request.username);
  if (!stored) return false;

  const match = await bcrypt.compare(request.password, stored.password);
  return match;
}