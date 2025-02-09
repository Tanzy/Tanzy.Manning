import express from 'express';
import bodyParser from 'body-parser';
import { setUploadRoutes } from './routes/uploadRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setUploadRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});