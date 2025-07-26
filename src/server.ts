import express from 'express';
import productRouter from './routes/product.router.js';
import productAdminRouter from './routes/admin/product.admin.router.js';
import dotenv from 'dotenv';
import { getEnv } from './util/dotenv.js';

// Sequelize initialization
import { sequelize, testDbConnection } from './util/sequelize.js';
import './models/registerAll.js'
import associateAll from './models/associateAll.js';

associateAll();
await testDbConnection();
await sequelize.sync();

// .env initialization
dotenv.config();

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/api/admin', productAdminRouter);

const PORT: number = parseInt(getEnv('PORT')) || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});