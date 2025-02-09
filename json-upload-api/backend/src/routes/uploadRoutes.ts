import { Router } from 'express';
import UploadController from '../controllers/uploadController';

const router = Router();
const uploadController = new UploadController();

export function setUploadRoutes(app: Router) {
    app.post('/upload', uploadController.handleUpload.bind(uploadController));
}

export default router;