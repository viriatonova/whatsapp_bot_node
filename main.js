import express from 'express';
import { MiddlewareGLobal } from './src/Middlewares/default.js';
import { ROUTER } from './api/router.js';
import cors from 'cors'
import bodyParser from 'body-parser';

/**
 * Server Configs
 */
export const SECRET = 'asdkjahsçldkhasduahuh'
const APP = express();
const PORT = 52000;

APP.use(cors())
APP.use(bodyParser.json())
APP.use(MiddlewareGLobal)
APP.use(ROUTER)

APP.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/api/v1`);
});
