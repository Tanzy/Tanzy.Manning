import { Request, Response } from 'express';

class UploadController {
    public async handleUpload(req: Request, res: Response): Promise<void> {
        try {
            const jsonData = req.body;

            // Process the JSON data as needed
            // For example, you might save it to a database or perform some operations

            res.status(200).json({ message: 'JSON data received successfully', data: jsonData });
        } catch (error) {
            res.status(500).json({ message: 'Error processing JSON data', error: error.message });
        }
    }
}

export default new UploadController();