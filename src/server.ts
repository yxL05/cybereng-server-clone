import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import productRouter from './routes/product.router.js';
import loginRouter from './routes/login.router.js';
import adminRouter from './routes/admin/admin.router.js';
import dotenv from 'dotenv';
import { getEnv } from './util/dotenv.js';

// Sequelize initialization
import { sequelize, testDbConnection } from './util/sequelize.js';
import './models/registerAll.js'
import associateAll from './models/associateAll.js';
import { corsOptions } from './middleware/cors/corsOptions.js';

associateAll();
await testDbConnection();
await sequelize.sync();

// .env initialization
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/products', productRouter);
app.use('/api/login', loginRouter);
app.use('/api/admin', adminRouter);

const PORT: number = parseInt(getEnv('PORT')) || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});