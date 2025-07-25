import express from 'express';
import productRouter from './routes/product.js'
import dotenv from 'dotenv';
import { getEnv } from './util/dotenv.js';

dotenv.config();

const app = express();

app.use('/products', productRouter);

const PORT: number = parseInt(getEnv('PORT')) || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});