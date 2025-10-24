@echo off
echo 🚀 Starting Yen Hoa Serenity Development Environment
echo ==================================================

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js v18+ first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...

REM Install root dependencies
npm install

REM Install server dependencies
echo 📦 Installing server dependencies...
cd server
npm install

REM Install client dependencies
echo 📦 Installing client dependencies...
cd ..\client
npm install

REM Go back to root
cd ..

echo ✅ Sample data will be loaded automatically from sampleData.js

echo ✅ Setup complete!
echo.
echo 🎯 To start the development servers:
echo    npm run dev
echo.
echo 📱 Frontend will be available at: http://localhost:5173
echo 🔧 Backend API will be available at: http://localhost:8000
echo.
echo 📚 For more information, check the README.md file
pause
