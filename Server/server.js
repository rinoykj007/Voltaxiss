import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import connectDB from './config/db.js';

// Import routes
import productRoutes from './routes/productRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
// Allow CORS for production frontend and all Vercel preview URLs
const allowedOrigins = [
  // Production URLs
  'https://voltaxissfnd.vercel.app',
  'https://www.voltaxiss.com',
  'https://voltaxiss.com',
  process.env.CLIENT_URL,
  // Development URLs (only add if in development mode)
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:5173', 'http://localhost:8080'] : [])
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);

    // Allow if origin is in allowed list OR is a Vercel preview URL
    if (allowedOrigins.includes(origin) || origin.includes('.vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
// Compress all responses (reduces response size by 70-90%)
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Volt Axis Trading Est. API',
    version: '1.0.0',
    status: 'active'
  });
});

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
const PORT = process.env.PORT || 5000;

// Check if running on Vercel (serverless)
const isVercel = process.env.VERCEL === '1';

if (!isVercel) {
  // For Render and other traditional hosting
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

// Export for Vercel
export default app;
