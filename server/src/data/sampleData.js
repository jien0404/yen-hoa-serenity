const samplePOIs = [
  {
    id: "yen-hoa-village-center",
    type: "attraction",
    name_vi: "Trung tâm Bản Yên Hoà",
    description_vi: "Trung tâm của Bản Yên Hoà với những ngôi nhà sàn truyền thống được bảo tồn nguyên vẹn. Đây là nơi du khách có thể tìm hiểu về văn hóa và lối sống của người dân địa phương.",
    location: {
      lat: 19.1234,
      lng: 104.5678
    },
    address_vi: "Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      "https://images.unsplash.com/photo-1583417319078-cf1d4a5a8e6a?w=800"
    ],
    tags_vi: ["văn hóa", "truyền thống", "nhà sàn", "cộng đồng"],
    rating: 5,
    operating_hours_vi: "Mở cửa cả ngày",
    contact_info: {
      phone: "0238.xxx.xxx",
      email: "info@yenhoadulich.com"
    }
  },
  {
    id: "terraced-rice-fields",
    type: "attraction",
    name_vi: "Ruộng Bậc Thang Yên Hoà",
    description_vi: "Những thửa ruộng bậc thang tuyệt đẹp được tạo nên bởi bàn tay khéo léo của người dân địa phương qua nhiều thế hệ. Đây là điểm đến lý tưởng để chụp ảnh và ngắm cảnh.",
    location: {
      lat: 19.1300,
      lng: 104.5700
    },
    address_vi: "Khu vực phía Đông Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
    ],
    tags_vi: ["cảnh quan", "ruộng bậc thang", "nông nghiệp", "chụp ảnh"],
    rating: 5,
    operating_hours_vi: "Mở cửa cả ngày",
    contact_info: {}
  },
  {
    id: "traditional-weaving",
    type: "culture",
    name_vi: "Làng Nghề Dệt Thổ Cẩm",
    description_vi: "Khám phá nghề dệt thổ cẩm truyền thống của người Thái. Du khách có thể học cách dệt, mua sắm các sản phẩm thủ công độc đáo và tìm hiểu về kỹ thuật dệt cổ truyền.",
    location: {
      lat: 19.1250,
      lng: 104.5650
    },
    address_vi: "Khu vực phía Tây Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ],
    tags_vi: ["thủ công", "dệt", "thổ cẩm", "văn hóa", "mua sắm"],
    rating: 4,
    operating_hours_vi: "8:00 - 17:00",
    contact_info: {
      phone: "0238.xxx.xxx"
    }
  },
  {
    id: "com-lam-bamboo-rice",
    type: "cuisine",
    name_vi: "Cơm Lam Yên Hoà",
    description_vi: "Món cơm lam truyền thống được nấu trong ống tre, kết hợp với thịt nướng và rau rừng tươi ngon. Đây là món ăn đặc sản không thể bỏ qua khi đến Bản Yên Hoà.",
    location: {
      lat: 19.1280,
      lng: 104.5680
    },
    address_vi: "Nhà hàng địa phương, Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800"
    ],
    tags_vi: ["đặc sản", "cơm lam", "truyền thống", "ẩm thực"],
    rating: 5,
    operating_hours_vi: "11:00 - 20:00",
    contact_info: {
      phone: "0238.xxx.xxx"
    }
  },
  {
    id: "stream-fishing",
    type: "activity",
    name_vi: "Câu Cá Suối Yên Hoà",
    description_vi: "Trải nghiệm câu cá tại dòng suối trong vắt của Bản Yên Hoà. Hoạt động này phù hợp cho cả gia đình và mang lại những khoảnh khắc thư giãn tuyệt vời.",
    location: {
      lat: 19.1350,
      lng: 104.5720
    },
    address_vi: "Dòng suối Yên Hoà, Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
    ],
    tags_vi: ["câu cá", "suối", "thư giãn", "gia đình", "thiên nhiên"],
    rating: 4,
    operating_hours_vi: "6:00 - 18:00",
    contact_info: {
      phone: "0238.xxx.xxx"
    }
  },
  {
    id: "homestay-traditional",
    type: "accommodation",
    name_vi: "Homestay Nhà Sàn Truyền Thống",
    description_vi: "Trải nghiệm nghỉ đêm tại nhà sàn truyền thống của người Thái. Du khách sẽ được hòa mình vào cuộc sống địa phương và thưởng thức ẩm thực đặc sản.",
    location: {
      lat: 19.1270,
      lng: 104.5670
    },
    address_vi: "Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1583417319078-cf1d4a5a8e6a?w=800",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
    ],
    tags_vi: ["homestay", "nhà sàn", "truyền thống", "văn hóa", "trải nghiệm"],
    rating: 5,
    operating_hours_vi: "Nhận khách 24/7",
    contact_info: {
      phone: "0238.xxx.xxx",
      email: "homestay@yenhoadulich.com"
    }
  },
  {
    id: "bamboo-forest-trek",
    type: "activity",
    name_vi: "Trekking Rừng Tre Yên Hoà",
    description_vi: "Hành trình trekking qua rừng tre xanh mướt, khám phá hệ sinh thái đa dạng và tận hưởng không khí trong lành của núi rừng Tây Bắc.",
    location: {
      lat: 19.1400,
      lng: 104.5750
    },
    address_vi: "Rừng tre phía Bắc Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
    ],
    tags_vi: ["trekking", "rừng tre", "thiên nhiên", "thể thao", "khám phá"],
    rating: 5,
    operating_hours_vi: "6:00 - 16:00",
    contact_info: {
      phone: "0238.xxx.xxx"
    }
  },
  {
    id: "traditional-dance",
    type: "culture",
    name_vi: "Biểu Diễn Múa Xòe Thái",
    description_vi: "Thưởng thức điệu múa xòe truyền thống của người Thái với trang phục rực rỡ và âm nhạc dân tộc. Du khách có thể tham gia và học các động tác múa cơ bản.",
    location: {
      lat: 19.1240,
      lng: 104.5660
    },
    address_vi: "Sân khấu văn hóa, Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An",
    imageURLs: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      "https://images.unsplash.com/photo-1583417319078-cf1d4a5a8e6a?w=800"
    ],
    tags_vi: ["múa xòe", "văn hóa", "biểu diễn", "truyền thống", "âm nhạc"],
    rating: 4,
    operating_hours_vi: "19:00 - 21:00 (Thứ 7, Chủ nhật)",
    contact_info: {
      phone: "0238.xxx.xxx"
    }
  }
];

module.exports = { samplePOIs };
