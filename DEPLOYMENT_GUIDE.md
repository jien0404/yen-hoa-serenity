# 🚀 Hướng dẫn Deploy - Yên Hoà Serenity

## 📋 Tổng quan

Dự án sẽ được deploy trên:
- **Backend**: Render.com (Node.js API)
- **Frontend**: Vercel.com (React app)
- **Database**: In-memory (sampleData.js)

## 🔧 Bước 1: Chuẩn bị Repository

### 1.1. Push code lên GitHub
```bash
# Khởi tạo git repository (nếu chưa có)
git init
git add .
git commit -m "Initial commit: Yen Hoa Serenity tourism website"

# Tạo repository trên GitHub và push
git remote add origin https://github.com/yourusername/yen-hoa-serenity.git
git branch -M main
git push -u origin main
```

### 1.2. Cấu trúc repository
```
yen-hoa-serenity/
├── client/          # React frontend
├── server/          # Node.js backend
├── package.json     # Root package.json
└── README.md
```

## 🌐 Bước 2: Deploy Backend lên Render

### 2.1. Đăng ký Render
1. Truy cập [render.com](https://render.com)
2. Đăng ký tài khoản (có thể dùng GitHub)
3. Kết nối GitHub repository

### 2.2. Tạo Web Service
1. Click **"New +"** → **"Web Service"**
2. Kết nối GitHub repository: `yen-hoa-serenity`
3. Cấu hình như sau:

**Basic Settings:**
- **Name**: `yen-hoa-serenity-backend`
- **Environment**: `Node`
- **Region**: `Oregon (US West)` hoặc gần nhất
- **Branch**: `main`
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Advanced Settings:**
- **Node Version**: `18.x`
- **Auto-Deploy**: `Yes`

### 2.3. Environment Variables
Trong Render dashboard, thêm các biến môi trường:

```env
NODE_ENV=production
PORT=8000
JWT_SECRET=your-super-secret-production-key-here
CORS_ORIGIN=https://yen-hoa-serenity.vercel.app
```

### 2.4. Deploy
1. Click **"Create Web Service"**
2. Render sẽ tự động build và deploy
3. Lưu lại URL backend: `https://yen-hoa-serenity-backend.onrender.com`

## ⚡ Bước 3: Deploy Frontend lên Vercel

### 3.1. Đăng ký Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng ký tài khoản (có thể dùng GitHub)
3. Kết nối GitHub repository

### 3.2. Import Project
1. Click **"New Project"**
2. Chọn repository: `yen-hoa-serenity`
3. Cấu hình như sau:

**Project Settings:**
- **Framework Preset**: `Vite`
- **Root Directory**: `client`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3.3. Environment Variables
Trong Vercel dashboard, thêm biến môi trường:

```env
VITE_API_BASE_URL=https://yen-hoa-serenity-backend.onrender.com/api/v1
```

### 3.4. Deploy
1. Click **"Deploy"**
2. Vercel sẽ tự động build và deploy
3. Lưu lại URL frontend: `https://yen-hoa-serenity.vercel.app`

## 🔄 Bước 4: Cập nhật CORS

### 4.1. Cập nhật Backend CORS
Sau khi có URL frontend, cập nhật CORS trong Render:

1. Vào Render dashboard → Web Service
2. Environment → Edit
3. Cập nhật `CORS_ORIGIN`:
```env
CORS_ORIGIN=https://yen-hoa-serenity.vercel.app
```
4. Click **"Save Changes"** → Render sẽ tự động redeploy

## ✅ Bước 5: Kiểm tra Deploy

### 5.1. Test Backend API
```bash
# Health check
curl https://yen-hoa-serenity-backend.onrender.com/api/v1/health

# Get all POIs
curl https://yen-hoa-serenity-backend.onrender.com/api/v1/pois
```

### 5.2. Test Frontend
1. Truy cập: `https://yen-hoa-serenity.vercel.app`
2. Kiểm tra các trang:
   - Trang chủ
   - Điểm tham quan
   - Ẩm thực
   - Hướng dẫn du lịch
   - Chi tiết POI

## 🔧 Bước 6: Cấu hình Custom Domain (Tùy chọn)

### 6.1. Backend Custom Domain (Render)
1. Vào Render dashboard → Web Service → Settings
2. Custom Domains → Add Domain
3. Thêm domain: `api.yenhoadulich.com`
4. Cập nhật DNS records theo hướng dẫn

### 6.2. Frontend Custom Domain (Vercel)
1. Vào Vercel dashboard → Project → Settings
2. Domains → Add Domain
3. Thêm domain: `yenhoadulich.com`
4. Cập nhật DNS records

## 📊 Monitoring & Analytics

### 6.1. Render Monitoring
- **Logs**: Render dashboard → Logs
- **Metrics**: CPU, Memory, Response time
- **Uptime**: 99.9% SLA

### 6.2. Vercel Analytics
- **Performance**: Core Web Vitals
- **Analytics**: Page views, user behavior
- **Functions**: Serverless function logs

## 🚨 Troubleshooting

### Lỗi thường gặp:

**1. CORS Error:**
```bash
# Kiểm tra CORS_ORIGIN trong Render
# Đảm bảo URL frontend chính xác
```

**2. API không hoạt động:**
```bash
# Kiểm tra Render logs
# Đảm bảo server đang chạy
curl https://your-backend.onrender.com/api/v1/health
```

**3. Frontend không load data:**
```bash
# Kiểm tra VITE_API_BASE_URL trong Vercel
# Đảm bảo URL backend chính xác
```

**4. Build failed:**
```bash
# Kiểm tra Node.js version
# Đảm bảo dependencies đúng
```

## 💰 Chi phí

### Render (Backend)
- **Free Tier**: 750 giờ/tháng
- **Starter**: $7/tháng (không giới hạn)
- **Professional**: $25/tháng (high availability)

### Vercel (Frontend)
- **Hobby**: Miễn phí (100GB bandwidth)
- **Pro**: $20/tháng (unlimited bandwidth)
- **Enterprise**: Custom pricing

## 🎉 Hoàn thành!

Sau khi deploy thành công:

✅ **Backend API**: `https://yen-hoa-serenity-backend.onrender.com`  
✅ **Frontend Website**: `https://yen-hoa-serenity.vercel.app`  
✅ **Health Check**: `https://yen-hoa-serenity-backend.onrender.com/api/v1/health`  
✅ **Auto Deploy**: Tự động deploy khi push code  
✅ **HTTPS**: SSL certificate tự động  
✅ **CDN**: Global content delivery  

## 📱 Kết quả cuối cùng

Website Yên Hoà Serenity sẽ có:
- **URL chính**: `https://yen-hoa-serenity.vercel.app`
- **API**: `https://yen-hoa-serenity-backend.onrender.com/api/v1`
- **Tính năng**: Đầy đủ như development
- **Performance**: Tối ưu với CDN
- **Uptime**: 99.9% availability

---

*Website đã sẵn sàng phục vụ cộng đồng Bản Yên Hoà! 🌟*
