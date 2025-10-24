# Yên Hoà Serenity - Website Du lịch Bản Yên Hoà

Website quảng bá du lịch cho Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An - một dự án được phát triển như "món quà công nghệ" tặng địa phương.

## 🌟 Giới thiệu

Yên Hoà Serenity là một website du lịch hiện đại, được thiết kế để quảng bá vẻ đẹp tự nhiên và văn hóa truyền thống của Bản Yên Hoà. Website cung cấp thông tin đầy đủ, tin cậy về các điểm tham quan, ẩm thực, và hướng dẫn du lịch cho khách du lịch có nhu cầu tìm hiểu kỹ thông tin trước khi quyết định hành trình.

## ✨ Tính năng chính

- **Trang chủ**: Giới thiệu tổng quan về Bản Yên Hoà
- **Điểm tham quan**: Danh sách và thông tin chi tiết các điểm đến
- **Ẩm thực**: Khám phá các món ăn đặc sản địa phương
- **Hướng dẫn du lịch**: Mẹo du lịch, lịch trình gợi ý, thông tin thực tế
- **Chi tiết POI**: Trang thông tin chi tiết cho từng điểm tham quan
- **Thiết kế responsive**: Tối ưu cho desktop và mobile
- **Giao diện thân thiện**: Dễ sử dụng, bố cục logic, thẩm mỹ

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js** với Express.js
- **In-memory data store** với sample data
- **RESTful API** architecture
- **CORS** và security middleware

### Frontend
- **React 18** với Vite
- **React Router** cho navigation
- **Axios** cho API calls
- **CSS Variables** cho design system
- **Responsive design** với CSS Grid/Flexbox

### Design System
- **Màu sắc**: Forest Green (#2E4031), Terracotta Clay (#A9674F), Sunrise Gold (#EBA937)
- **Typography**: Lora (headings), Nunito Sans (body)
- **Components**: Cards, Buttons, Badges, Rating system

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js v18.x trở lên
- npm hoặc yarn

### 1. Clone repository
```bash
git clone <repository-url>
cd yen-hoa-serenity
```

### 2. Cài đặt dependencies
```bash
# Cài đặt dependencies cho toàn bộ dự án
npm install

# Hoặc cài đặt riêng cho từng phần
cd server && npm install
cd ../client && npm install
```

### 3. Cấu hình môi trường

#### Backend (.env)
```env
PORT=8000
NODE_ENV=development
JWT_SECRET=your-very-strong-secret-key-here
CORS_ORIGIN=http://localhost:5173
```

#### Frontend (.env.local)
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### 4. Chạy ứng dụng

#### Cách 1: Chạy đồng thời (khuyến nghị)
```bash
# Từ thư mục gốc
npm run dev
```

#### Cách 2: Chạy riêng biệt
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend  
cd client
npm run dev
```

### 6. Truy cập ứng dụng
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Health Check**: http://localhost:8000/api/v1/health

## 📁 Cấu trúc dự án

```
yen-hoa-serenity/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   └── assets/        # Styles và assets
│   ├── public/
│   └── package.json
├── server/                # Node.js Backend
│   ├── src/
│   │   ├── api/          # API routes, controllers, models
│   │   ├── data/         # Sample data
│   │   └── scripts/      # Utility scripts
│   └── package.json
└── README.md
```

## 🎨 Design System

### Màu sắc
- **Primary**: Forest Green (#2E4031) - Màu xanh rừng
- **Secondary**: Terracotta Clay (#A9674F) - Màu đất nung
- **Accent**: Sunrise Gold (#EBA937) - Màu vàng hoàng hôn
- **Background**: Light Khaki (#F5F3ED) - Nền khaki nhạt

### Typography
- **Headings**: Lora (serif) - Thanh lịch, truyền thống
- **Body**: Nunito Sans (sans-serif) - Dễ đọc, thân thiện

## 📊 API Endpoints

### POIs (Points of Interest)
- `GET /api/v1/pois` - Lấy tất cả POIs
- `GET /api/v1/pois/:id` - Lấy POI theo ID
- `GET /api/v1/pois/type/:type` - Lấy POIs theo loại
- `POST /api/v1/pois` - Tạo POI mới
- `PUT /api/v1/pois/:id` - Cập nhật POI
- `DELETE /api/v1/pois/:id` - Xóa POI

### Query Parameters
- `type`: Lọc theo loại (attraction, cuisine, accommodation, activity, culture)
- `tags`: Lọc theo tags (phân cách bằng dấu phẩy)
- `minRating`: Lọc theo rating tối thiểu
- `search`: Tìm kiếm trong tên và mô tả

## 🌍 Triển khai

### 🚀 Deploy tự động (Khuyến nghị)
```bash
# Chạy script deploy tự động
chmod +x deploy.sh
./deploy.sh

# Hoặc trên Windows
deploy.bat
```

### 📋 Deploy thủ công

#### Backend (Render)
1. Truy cập [render.com](https://render.com) → Sign up
2. **New Web Service** → Connect GitHub repository
3. **Cấu hình**:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Environment Variables**:
   ```
   NODE_ENV=production
   PORT=8000
   JWT_SECRET=your-secret-key
   CORS_ORIGIN=https://your-frontend.vercel.app
   ```

#### Frontend (Vercel)
1. Truy cập [vercel.com](https://vercel.com) → Sign up
2. **New Project** → Import GitHub repository
3. **Cấu hình**:
   - Root Directory: `client`
   - Framework: `Vite`
   - Build Command: `npm run build`
4. **Environment Variables**:
   ```
   VITE_API_BASE_URL=https://your-backend.onrender.com/api/v1
   ```

### 📚 Hướng dẫn chi tiết
- **Deploy nhanh**: [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)
- **Hướng dẫn đầy đủ**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🤝 Đóng góp

Dự án này được phát triển như một "món quà công nghệ" cho địa phương Bản Yên Hoà. Mọi đóng góp để cải thiện website đều được chào đón.

## 📄 License

MIT License - Dự án được phát triển với mục đích hỗ trợ phát triển du lịch địa phương.

## 📞 Liên hệ

- **Địa chỉ**: Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An
- **Email**: info@yenhoadulich.com
- **Phone**: 0238.xxx.xxx

---

*Được phát triển với ❤️ cho cộng đồng Bản Yên Hoà*
