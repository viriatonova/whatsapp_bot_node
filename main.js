import express from 'express';
import { MiddlewareGLobal } from './src/Middleware/default.js';
import { ROUTER } from './router.js';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();


/**
 * Server Configs
 */
export const SECRET = 'asdkjahsçldkhasduahuh'
const APP = express();
const PORT = 52000;

APP.use(cors())
APP.use(MiddlewareGLobal)
APP.use(ROUTER)

APP.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/api/v1`);
});