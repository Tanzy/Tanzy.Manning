import express from 'express';
import { processJson } from '../controllers/fileController';

const router = express.Router();

router.post('/upload', processJson);

export default router;