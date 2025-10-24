@echo off
echo 🚀 Yen Hoa Serenity - Auto Deploy Script
echo ========================================

REM Check if git is initialized
if not exist ".git" (
    echo ⚠️  Git repository not found. Initializing...
    git init
    git add .
    git commit -m "Initial commit: Yen Hoa Serenity tourism website"
)

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo ⚠️  No remote origin found.
    echo Please add your GitHub repository:
    echo git remote add origin https://github.com/jien0404/yen-hoa-serenity.git
    echo.
    echo Or run:
    echo git remote add origin ^<your-github-repo-url^>
    pause
    exit /b 1
)

echo 📦 Building project...

REM Install dependencies
echo Installing root dependencies...
npm install

echo Installing server dependencies...
cd server
npm install

echo Installing client dependencies...
cd ..\client
npm install

cd ..

echo ✅ Dependencies installed successfully

REM Test builds
echo 🔨 Testing builds...

REM Test client build
cd client
echo Testing client build...
npm run build
if errorlevel 1 (
    echo ❌ Client build failed
    pause
    exit /b 1
)
echo ✅ Client build successful
cd ..

echo ✅ All builds successful

REM Git operations
echo 📝 Committing changes...

REM Add all changes
git add .

REM Check if there are changes to commit
git diff --staged --quiet
if errorlevel 1 (
    git commit -m "Deploy: Yen Hoa Serenity tourism website

- Backend: Node.js API with sample data
- Frontend: React + Vite with responsive design  
- Features: POI management, search, filtering
- Ready for Render + Vercel deployment"
) else (
    echo ⚠️  No changes to commit
)

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push origin main

if errorlevel 1 (
    echo ❌ Failed to push to GitHub
    pause
    exit /b 1
)

echo ✅ Successfully pushed to GitHub

echo.
echo 🎉 Deploy preparation complete!
echo.
echo 📋 Next steps:
echo 1. 🌐 Deploy Backend to Render:
echo    - Go to https://render.com
echo    - Create new Web Service
echo    - Connect GitHub repository
echo    - Root Directory: server
echo    - Build Command: npm install
echo    - Start Command: npm start
echo.
echo 2. ⚡ Deploy Frontend to Vercel:
echo    - Go to https://vercel.com
echo    - Import GitHub repository
echo    - Root Directory: client
echo    - Framework: Vite
echo    - Build Command: npm run build
echo.
echo 3. 🔗 Update CORS:
echo    - Update CORS_ORIGIN in Render with Vercel URL
echo    - Update VITE_API_BASE_URL in Vercel with Render URL
echo.
echo 📚 For detailed instructions, see: DEPLOYMENT_GUIDE.md
echo.
echo 🌟 Your tourism website is ready to serve the community!
pause
