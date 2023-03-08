import { Router } from 'express';

export const ROUTER = Router()

ROUTER.get('/api/v1', (req, res) => res.status(200).json({ status: 'API is running' }));
