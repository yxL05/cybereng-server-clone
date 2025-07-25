import express from 'express';
import productRouter from './routes/product.js'

const app = express();

app.use('/products', productRouter);

const PORT: number = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});