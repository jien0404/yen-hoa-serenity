import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      padding: 'var(--space-16) 0 var(--space-8) 0',
      marginTop: 'var(--space-16)'
    }}>
      <div className="container">
        <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
          {/* About Section */}
          <div>
            <h3 style={{
              color: 'white',
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-xl)'
            }}>
              Về Yên Hoà Serenity
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: 'var(--space-4)'
            }}>
              Website quảng bá du lịch Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An. 
              Khám phá vẻ đẹp tự nhiên và văn hóa truyền thống của vùng đất này.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              color: 'white',
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-xl)'
            }}>
              Liên kết nhanh
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a href="/" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                Trang chủ
              </a>
              <a href="/attractions" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                Điểm tham quan
              </a>
              <a href="/cuisine" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                Ẩm thực
              </a>
              <a href="/travel-guide" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>
                Hướng dẫn du lịch
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              color: 'white',
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-xl)'
            }}>
              Thông tin liên hệ
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ fontSize: 'var(--text-lg)' }}>📍</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Bản Yên Hoà, Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ fontSize: 'var(--text-lg)' }}>📞</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  0238.xxx.xxx
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ fontSize: 'var(--text-lg)' }}>✉️</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  info@yenhoadulich.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          marginTop: 'var(--space-8)',
          paddingTop: 'var(--space-6)',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
            fontSize: 'var(--text-sm)'
          }}>
            © 2024 Yên Hoà Serenity. Tất cả quyền được bảo lưu. 
            Được phát triển như một món quà công nghệ cho địa phương.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
