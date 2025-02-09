import express from 'express';
import fileRoutes from './routes/fileRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api', fileRoutes);
app.use(express.static('public')); // Serve static files from the "public" directory

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});