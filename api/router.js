import { Router } from 'express';
import { Call } from '../src/Controllers/CallController.js';

export const ROUTER = Router()

ROUTER.get('/api/v1', (req, res) => res.status(200).json({ status: 'API is running' }));
ROUTER.post('/api/v1/call', Call)