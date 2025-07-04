import express from 'express';
import dotenv from 'dotenv';
import UserRoute from './routes/user.route.js';
import { connect } from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*', // Allow all origins for simplicity, adjust as needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow credentials if needed
}));

const PORT = process.env.PORT || 5000;

app.use('/api/user', UserRoute);

app.listen(PORT, () => {
    connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB connected successfully"))
        .catch(err => console.error("MongoDB connection failed:", err));
});