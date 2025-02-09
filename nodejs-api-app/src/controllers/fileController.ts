import { Request, Response } from 'express';
import axios from 'axios';

export const processJson = async (req: Request, res: Response): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token || token !== process.env.READWISE_API_TOKEN) {
            res.status(403).json({ message: 'Forbidden: Invalid or missing token' });
            return;
        }

        const jsonData = req.body;

        const highlights = jsonData.scrapbookItems.map((item: any) => ({
            text: item.text,
            title: item.title,
            source_url: item.link,
            note: item.html,
            location: item.bookElementOrdinal,
            location_type: 'chapter',
            highlighted_at: item.dateCreated
        }));

        const response = await axios.post('https://readwise.io/api/v2/highlights/', {
            highlights: highlights
        }, {
            headers: {
                'Authorization': `Token ${process.env.READWISE_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        res.status(200).json({ message: 'Highlights sent successfully', data: response.data });
    } catch (error) {
        const errorMessage = (error as any).message;
        res.status(500).json({ message: 'Error processing JSON', error: errorMessage });
    }
};