import express from 'express';
import productAdminRouter from './product.admin.router.js'
import { validateJwt } from '../../middleware/authentication/validateJwt.js';

const router = express.Router();

router.use(validateJwt);

router.use(productAdminRouter);

export default router;