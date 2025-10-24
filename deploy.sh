#!/bin/bash

echo "🚀 Yen Hoa Serenity - Auto Deploy Script"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Git repository not found. Initializing...${NC}"
    git init
    git add .
    git commit -m "Initial commit: Yen Hoa Serenity tourism website"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  No remote origin found.${NC}"
    echo -e "${BLUE}Please add your GitHub repository:${NC}"
    echo "git remote add origin https://github.com/yourusername/yen-hoa-serenity.git"
    echo ""
    echo -e "${BLUE}Or run:${NC}"
    echo "git remote add origin <your-github-repo-url>"
    exit 1
fi

echo -e "${BLUE}📦 Building project...${NC}"

# Install dependencies
echo "Installing root dependencies..."
npm install

echo "Installing server dependencies..."
cd server && npm install

echo "Installing client dependencies..."
cd ../client && npm install

cd ..

echo -e "${GREEN}✅ Dependencies installed successfully${NC}"

# Test build
echo -e "${BLUE}🔨 Testing builds...${NC}"

# Test server build
cd server
echo "Testing server..."
timeout 10s npm start &
SERVER_PID=$!
sleep 3
if kill -0 $SERVER_PID 2>/dev/null; then
    echo -e "${GREEN}✅ Server build successful${NC}"
    kill $SERVER_PID
else
    echo -e "${RED}❌ Server build failed${NC}"
    exit 1
fi
cd ..

# Test client build
cd client
echo "Testing client build..."
if npm run build; then
    echo -e "${GREEN}✅ Client build successful${NC}"
else
    echo -e "${RED}❌ Client build failed${NC}"
    exit 1
fi
cd ..

echo -e "${GREEN}✅ All builds successful${NC}"

# Git operations
echo -e "${BLUE}📝 Committing changes...${NC}"

# Add all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
else
    git commit -m "Deploy: Yen Hoa Serenity tourism website

- Backend: Node.js API with sample data
- Frontend: React + Vite with responsive design
- Features: POI management, search, filtering
- Ready for Render + Vercel deployment"
fi

# Push to GitHub
echo -e "${BLUE}🚀 Pushing to GitHub...${NC}"
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub${NC}"
else
    echo -e "${RED}❌ Failed to push to GitHub${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 Deploy preparation complete!${NC}"
echo ""
echo -e "${BLUE}📋 Next steps:${NC}"
echo "1. 🌐 Deploy Backend to Render:"
echo "   - Go to https://render.com"
echo "   - Create new Web Service"
echo "   - Connect GitHub repository"
echo "   - Root Directory: server"
echo "   - Build Command: npm install"
echo "   - Start Command: npm start"
echo ""
echo "2. ⚡ Deploy Frontend to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import GitHub repository"
echo "   - Root Directory: client"
echo "   - Framework: Vite"
echo "   - Build Command: npm run build"
echo ""
echo "3. 🔗 Update CORS:"
echo "   - Update CORS_ORIGIN in Render with Vercel URL"
echo "   - Update VITE_API_BASE_URL in Vercel with Render URL"
echo ""
echo -e "${BLUE}📚 For detailed instructions, see: DEPLOYMENT_GUIDE.md${NC}"
echo ""
echo -e "${GREEN}🌟 Your tourism website is ready to serve the community!${NC}"

