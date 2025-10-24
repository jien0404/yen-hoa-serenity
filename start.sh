#!/bin/bash

echo "🚀 Starting Yen Hoa Serenity Development Environment"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+ first."
    exit 1
fi

# No MongoDB required - using in-memory data store

echo "📦 Installing dependencies..."

# Install root dependencies
npm install

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server && npm install

# Install client dependencies
echo "📦 Installing client dependencies..."
cd ../client && npm install

# Go back to root
cd ..

echo "✅ Sample data will be loaded automatically from sampleData.js"

echo "✅ Setup complete!"
echo ""
echo "🎯 To start the development servers:"
echo "   npm run dev"
echo ""
echo "📱 Frontend will be available at: http://localhost:5173"
echo "🔧 Backend API will be available at: http://localhost:8000"
echo ""
echo "📚 For more information, check the README.md file"
