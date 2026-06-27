import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.get(['/', '/api'], (req, res) => {
  res.status(200).json({ status: "online", message: "Anas Portfolio API" });
});


let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return; 
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    isConnected = conn.connections[0].readyState === 1;
    console.log('[MongoDB] Connected safely to Atlas');
  } catch (error) {
    console.error(`[MongoDB Error]: ${error.message}`);
  }
};

// Kick off connection immediately upon Lambda boot
connectDB();

// =================================================================
// RULE 1: THE DUAL-BOOT EXPORT 
// =================================================================

// A. If you type "node server.js" on your computer, boot normally:
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`[Server] Booted locally on http://localhost:${PORT}`);
  });
}

// B. If Vercel builds this file, give Vercel the raw Express app:
export default app;