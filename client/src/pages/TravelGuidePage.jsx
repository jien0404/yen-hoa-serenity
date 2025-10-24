import React from 'react';

const TravelGuidePage = () => {
  const travelTips = [
    {
      title: "Thời điểm tốt nhất để thăm",
      content: "Tháng 9-11 là thời điểm lý tưởng với thời tiết mát mẻ và ruộng bậc thang đẹp nhất. Tránh mùa mưa từ tháng 6-8.",
      icon: "📅"
    },
    {
      title: "Phương tiện di chuyển",
      content: "Từ Hà Nội: xe khách đến Quế Phong (6-7 giờ), sau đó xe máy hoặc taxi đến Bản Yên Hoà (30 phút).",
      icon: "🚗"
    },
    {
      title: "Chỗ ở",
      content: "Homestay nhà sàn truyền thống là lựa chọn tốt nhất để trải nghiệm văn hóa địa phương. Đặt trước vào mùa cao điểm.",
      icon: "🏠"
    },
    {
      title: "Đồ ăn địa phương",
      content: "Thử cơm lam, cá suối nướng, rau rừng. Mang theo thuốc tiêu hóa nếu không quen với ẩm thực địa phương.",
      icon: "🍽️"
    },
    {
      title: "Trang phục",
      content: "Mang quần áo thoải mái, giày thể thao cho trekking. Áo ấm vào buổi tối, mũ nón chống nắng ban ngày.",
      icon: "👕"
    },
    {
      title: "Văn hóa & Lễ nghi",
      content: "Tôn trọng phong tục địa phương, xin phép trước khi chụp ảnh người dân. Tham gia các hoạt động văn hóa một cách lịch sự.",
      icon: "🤝"
    }
  ];

  const itinerary = [
    {
      day: "Ngày 1",
      title: "Khám phá trung tâm bản",
      activities: [
        "Tham quan nhà sàn truyền thống",
        "Học dệt thổ cẩm",
        "Thưởng thức cơm lam",
        "Xem múa xòe buổi tối"
      ]
    },
    {
      day: "Ngày 2", 
      title: "Trekking & Thiên nhiên",
      activities: [
        "Trekking rừng tre",
        "Tham quan ruộng bậc thang",
        "Câu cá suối",
        "Nghỉ đêm tại homestay"
      ]
    },
    {
      day: "Ngày 3",
      title: "Trải nghiệm văn hóa",
      activities: [
        "Học nấu ăn địa phương",
        "Mua sắm đồ thủ công",
        "Chụp ảnh lưu niệm",
        "Kết thúc chuyến đi"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        color: 'white',
        padding: 'var(--space-20) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--weight-bold)',
            marginBottom: 'var(--space-6)',
            color: 'white'
          }}>
            Hướng dẫn du lịch Bản Yên Hoà
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-8)',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto var(--space-8) auto'
          }}>
            Tất cả thông tin cần thiết để có một chuyến du lịch hoàn hảo 
            tại Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An.
          </p>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            Mẹo du lịch hữu ích
          </h2>
          <div className="grid grid-2">
            {travelTips.map((tip, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                    <div style={{
                      fontSize: 'var(--text-2xl)',
                      width: '50px',
                      textAlign: 'center'
                    }}>
                      {tip.icon}
                    </div>
                    <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>
                      {tip.title}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                    {tip.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="section" style={{ backgroundColor: 'var(--color-background-card)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            Lịch trình gợi ý 3 ngày 2 đêm
          </h2>
          <div className="grid grid-3">
            {itinerary.map((day, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>
                    {day.day}
                  </h3>
                  <p style={{ margin: 'var(--space-2) 0 0 0', color: 'var(--color-text-light)' }}>
                    {day.title}
                  </p>
                </div>
                <div className="card-body">
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} style={{
                        padding: 'var(--space-2) 0',
                        borderBottom: '1px solid var(--color-border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)'
                      }}>
                        <span style={{
                          color: 'var(--color-accent)',
                          fontWeight: 'var(--weight-semibold)'
                        }}>
                          ✓
                        </span>
                        <span style={{ color: 'var(--color-text-light)' }}>
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            Thông tin thực tế
          </h2>
          <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
            <div>
              <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                Chi phí ước tính
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0' }}>
                  <span>Homestay (1 đêm):</span>
                  <span style={{ fontWeight: 'var(--weight-semibold)' }}>200.000 - 300.000 VNĐ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0' }}>
                  <span>Ăn uống (1 ngày):</span>
                  <span style={{ fontWeight: 'var(--weight-semibold)' }}>150.000 - 250.000 VNĐ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0' }}>
                  <span>Hoạt động & vé tham quan:</span>
                  <span style={{ fontWeight: 'var(--weight-semibold)' }}>100.000 - 200.000 VNĐ</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0', borderTop: '2px solid var(--color-primary)', marginTop: 'var(--space-2)', paddingTop: 'var(--space-4)' }}>
                  <span style={{ fontWeight: 'var(--weight-semibold)' }}>Tổng cộng (1 ngày):</span>
                  <span style={{ fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)' }}>450.000 - 750.000 VNĐ</span>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                Liên hệ & Đặt tour
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <p style={{ margin: '0 0 var(--space-2) 0', fontWeight: 'var(--weight-semibold)' }}>
                    📞 Hotline đặt tour:
                  </p>
                  <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                    0238.xxx.xxx
                  </p>
                </div>
                <div>
                  <p style={{ margin: '0 0 var(--space-2) 0', fontWeight: 'var(--weight-semibold)' }}>
                    ✉️ Email:
                  </p>
                  <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                    info@yenhoadulich.com
                  </p>
                </div>
                <div>
                  <p style={{ margin: '0 0 var(--space-2) 0', fontWeight: 'var(--weight-semibold)' }}>
                    📍 Địa chỉ:
                  </p>
                  <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                    Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: 'var(--color-background-card)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--space-6)' }}>
            Sẵn sàng khám phá Bản Yên Hoà?
          </h2>
          <p style={{ 
            fontSize: 'var(--text-lg)', 
            color: 'var(--color-text-light)', 
            marginBottom: 'var(--space-8)',
            maxWidth: '600px',
            margin: '0 auto var(--space-8) auto'
          }}>
            Hãy bắt đầu lên kế hoạch cho chuyến du lịch đáng nhớ của bạn 
            tại một trong những điểm đến đẹp nhất của Tây Bắc Việt Nam.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/attractions" className="btn btn-primary">
              Khám phá điểm tham quan
            </a>
            <a href="/cuisine" className="btn btn-secondary">
              Tìm hiểu ẩm thực
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelGuidePage;
