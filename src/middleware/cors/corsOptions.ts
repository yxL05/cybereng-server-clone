import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: /^https?:\/\/localhost:\d+$/,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true,
}