const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { samplePOIs } = require('./src/data/sampleData');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

const allowedOrigins = [
  'https://yen-hoa-serenity-frontend.vercel.app',
  'https://yen-hoa-serenity.vercel.app',
  'http://localhost:5173'
];

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory data store
let pois = [...samplePOIs];

console.log(`✅ Loaded ${pois.length} POIs from sample data`);

// Routes
app.use('/api/v1/pois', require('./src/api/routes/poiRoutes'));

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Yen Hoa Serenity API is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Yen Hoa Serenity API',
    health: '/api/v1/health',
    docs: '/api/v1/pois'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/v1/health`);
});
