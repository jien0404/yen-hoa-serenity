# 🚀 Hướng dẫn nhanh - Yên Hoà Serenity

## Cài đặt và chạy trong 5 phút

### 1. Yêu cầu hệ thống
- Node.js v18+ 
- Git

### 2. Cài đặt
```bash
# Clone hoặc download dự án
cd yen-hoa-serenity

# Chạy script tự động (Linux/Mac)
chmod +x start.sh
./start.sh

# Hoặc chạy script tự động (Windows)
start.bat

# Hoặc cài đặt thủ công
npm install
cd server && npm install
cd ../client && npm install
cd ..
```

### 3. Chạy ứng dụng
```bash
# Chạy cả frontend và backend
npm run dev

# Hoặc chạy riêng
# Terminal 1: cd server && npm run dev
# Terminal 2: cd client && npm run dev
```

### 5. Truy cập
- **Website**: http://localhost:5173
- **API**: http://localhost:8000/api/v1/health

## 🎯 Tính năng chính

✅ **Trang chủ** - Giới thiệu Bản Yên Hoà  
✅ **Điểm tham quan** - Danh sách và chi tiết  
✅ **Ẩm thực** - Món ăn đặc sản  
✅ **Hướng dẫn du lịch** - Mẹo và lịch trình  
✅ **Responsive design** - Tối ưu mobile  
✅ **API RESTful** - Backend hoàn chỉnh  

## 🎨 Thiết kế

- **Màu sắc**: Xanh rừng, đất nung, vàng hoàng hôn
- **Font**: Lora + Nunito Sans
- **Style**: Tự nhiên, ấm áp, truyền thống

## 📱 Cấu trúc

```
yen-hoa-serenity/
├── client/          # React frontend
├── server/          # Node.js backend  
├── README.md        # Hướng dẫn chi tiết
└── QUICK_START.md   # Hướng dẫn nhanh
```

## 🆘 Xử lý lỗi thường gặp

**Lỗi port đã được sử dụng:**
```bash
# Thay đổi port trong .env files
# Server: PORT=8001
# Client: VITE_API_BASE_URL=http://localhost:8001/api/v1
```

**Lỗi dependencies:**
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

## 🎉 Hoàn thành!

Website đã sẵn sàng để sử dụng và triển khai. 
Đây là một "món quà công nghệ" cho cộng đồng Bản Yên Hoà! 🌟
