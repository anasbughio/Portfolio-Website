import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ status: "online", message: "Anas Portfolio API" });
});
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[MongoDB] Connected safely to: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Error]: ${error.message}`);
    process.exit(1);
  }
};


const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[Server] Booted in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`);
  });
});