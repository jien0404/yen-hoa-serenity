# 🚀 Hướng dẫn cài đặt đơn giản - Không cần MongoDB

## ✨ Phiên bản đơn giản hóa

Website Yên Hoà Serenity đã được tối ưu hóa để chạy **không cần MongoDB**. Tất cả dữ liệu được lưu trữ trong file `sampleData.js` và tự động load khi khởi động server.

## 🎯 Cài đặt siêu nhanh (2 phút)

### 1. Yêu cầu
- Node.js v18+ (tải từ [nodejs.org](https://nodejs.org/))
- Git (tùy chọn)

### 2. Cài đặt
```bash
# Di chuyển vào thư mục dự án
cd yen-hoa-serenity

# Cài đặt tất cả dependencies
npm install
cd server && npm install
cd ../client && npm install
cd ..
```

### 3. Chạy ngay
```bash
# Chạy cả frontend và backend cùng lúc
npm run dev
```

### 4. Truy cập
- **Website**: http://localhost:5173
- **API**: http://localhost:8000/api/v1/health

## 🎉 Xong! 

Website đã sẵn sàng với:
- ✅ 8 điểm tham quan mẫu về Bản Yên Hoà
- ✅ Tìm kiếm và lọc thông minh
- ✅ Giao diện responsive đẹp mắt
- ✅ Không cần cài đặt database

## 📱 Tính năng có sẵn

### Trang chủ
- Hero section với thông tin tổng quan
- Điểm tham quan nổi bật
- Thống kê nhanh

### Điểm tham quan
- Danh sách đầy đủ với hình ảnh
- Tìm kiếm theo tên/mô tả
- Lọc theo loại (attraction, culture, activity)
- Lọc theo rating
- Lọc theo tags

### Ẩm thực
- Món ăn đặc sản địa phương
- Thông tin chi tiết từng món
- Phương pháp chế biến truyền thống

### Hướng dẫn du lịch
- Mẹo du lịch hữu ích
- Lịch trình 3 ngày 2 đêm
- Thông tin chi phí
- Liên hệ đặt tour

### Chi tiết POI
- Thông tin đầy đủ từng điểm
- Gallery ảnh tương tác
- Thông tin thực tế (giờ mở cửa, liên hệ)
- Đánh giá và tags

## 🔧 Cấu trúc dữ liệu

Dữ liệu được lưu trong `server/src/data/sampleData.js` với 8 POIs:

1. **Trung tâm Bản Yên Hoà** (attraction)
2. **Ruộng Bậc Thang Yên Hoà** (attraction)  
3. **Làng Nghề Dệt Thổ Cẩm** (culture)
4. **Cơm Lam Yên Hoà** (cuisine)
5. **Câu Cá Suối Yên Hoà** (activity)
6. **Homestay Nhà Sàn Truyền Thống** (accommodation)
7. **Trekking Rừng Tre Yên Hoà** (activity)
8. **Biểu Diễn Múa Xòe Thái** (culture)

## 🎨 Thiết kế

- **Màu sắc**: Xanh rừng (#2E4031), Đất nung (#A9674F), Vàng hoàng hôn (#EBA937)
- **Font**: Lora (tiêu đề) + Nunito Sans (nội dung)
- **Style**: Tự nhiên, ấm áp, phản ánh văn hóa địa phương

## 🚀 Triển khai

### Render (Backend)
1. Kết nối GitHub repository
2. Root Directory: `server`
3. Build Command: `npm install`
4. Start Command: `npm start`

### Vercel (Frontend)  
1. Kết nối GitHub repository
2. Root Directory: `client`
3. Build Command: `npm run build`
4. Environment Variables: `VITE_API_BASE_URL=https://your-render-app.onrender.com/api/v1`

## 🆘 Xử lý lỗi

**Port đã được sử dụng:**
```bash
# Thay đổi port trong server/.env
PORT=8001

# Và trong client/.env.local  
VITE_API_BASE_URL=http://localhost:8001/api/v1
```

**Lỗi dependencies:**
```bash
# Xóa và cài lại
rm -rf node_modules package-lock.json
npm install
```

## 🎯 Lợi ích của phiên bản này

✅ **Đơn giản**: Không cần cài MongoDB  
✅ **Nhanh**: Khởi động trong vài giây  
✅ **Ổn định**: Không lo lỗi database  
✅ **Demo hoàn hảo**: Đủ tính năng để showcase  
✅ **Dễ triển khai**: Chỉ cần Node.js  

---

*Đây là "món quà công nghệ" hoàn hảo cho cộng đồng Bản Yên Hoà! 🌟*
