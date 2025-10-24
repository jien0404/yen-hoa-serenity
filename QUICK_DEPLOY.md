# ⚡ Deploy Nhanh - Yên Hoà Serenity

## 🎯 Deploy trong 10 phút

### Bước 1: Chuẩn bị (2 phút)
```bash
# 1. Chạy script deploy tự động
chmod +x deploy.sh
./deploy.sh

# Hoặc trên Windows
deploy.bat
```

### Bước 2: Deploy Backend - Render (3 phút)

1. **Truy cập**: [render.com](https://render.com) → Sign up với GitHub
2. **New Web Service** → Connect GitHub repository
3. **Cấu hình**:
   - Name: `yen-hoa-serenity-backend`
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Environment Variables**:
   ```
   NODE_ENV=production
   PORT=8000
   JWT_SECRET=your-secret-key
   CORS_ORIGIN=https://yen-hoa-serenity.vercel.app
   ```
5. **Deploy** → Lưu URL backend

### Bước 3: Deploy Frontend - Vercel (3 phút)

1. **Truy cập**: [vercel.com](https://vercel.com) → Sign up với GitHub
2. **New Project** → Import GitHub repository
3. **Cấu hình**:
   - Framework: `Vite`
   - Root Directory: `client`
   - Build Command: `npm run build`
4. **Environment Variables**:
   ```
   VITE_API_BASE_URL=https://your-backend.onrender.com/api/v1
   ```
5. **Deploy** → Lưu URL frontend

### Bước 4: Cập nhật CORS (2 phút)

1. **Vào Render** → Web Service → Environment
2. **Cập nhật CORS_ORIGIN** với URL Vercel
3. **Save** → Tự động redeploy

## ✅ Kết quả

- **Backend**: `https://yen-hoa-serenity-backend.onrender.com`
- **Frontend**: `https://yen-hoa-serenity.vercel.app`
- **API Health**: `https://your-backend.onrender.com/api/v1/health`

## 🎉 Hoàn thành!

Website đã sẵn sàng phục vụ cộng đồng Bản Yên Hoà! 🌟

---

*Xem DEPLOYMENT_GUIDE.md để biết chi tiết đầy đủ*

