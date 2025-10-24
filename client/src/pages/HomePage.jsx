import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePOIs } from '../hooks/usePOIs';

const HomePage = () => {
  const { pois, loading, error } = usePOIs();
  const [featuredPOIs, setFeaturedPOIs] = useState([]);

  useEffect(() => {
    if (pois && pois.length > 0) {
      // Get top-rated POIs for featured section
      const topRated = pois
        .filter(poi => poi.rating >= 4)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
      setFeaturedPOIs(topRated);
    }
  }, [pois]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 'var(--space-16)' }}>
        <div className="loading-spinner" style={{ margin: '0 auto' }}></div>
        <p style={{ marginTop: 'var(--space-4)' }}>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: 'var(--space-16)' }}>
        <p style={{ color: 'var(--color-error)' }}>Lỗi khi tải dữ liệu: {error}</p>
      </div>
    );
  }

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
            fontSize: 'var(--text-5xl)',
            fontWeight: 'var(--weight-bold)',
            marginBottom: 'var(--space-6)',
            color: 'white'
          }}>
            Chào mừng đến với Bản Yên Hoà
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-8)',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto var(--space-8) auto'
          }}>
            Khám phá vẻ đẹp tự nhiên và văn hóa truyền thống của Bản Yên Hoà, 
            Xã Mỹ Lý, Tỉnh Nghệ An - một điểm đến du lịch bền vững và đầy ý nghĩa.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/attractions" className="btn btn-accent">
              Khám phá ngay
            </Link>
            <Link to="/travel-guide" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Hướng dẫn du lịch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            Điểm đến nổi bật
          </h2>
          <div className="grid grid-3">
            {featuredPOIs.map((poi) => (
              <div key={poi.id} className="card">
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={poi.imageURLs[0] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'}
                    alt={poi.name_vi}
                    className="img-responsive"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-4)',
                    right: 'var(--space-4)',
                    backgroundColor: 'var(--color-accent)',
                    color: 'white',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--weight-semibold)'
                  }}>
                    ⭐ {poi.rating}
                  </div>
                </div>
                <div className="card-body">
                  <h3 style={{ marginBottom: 'var(--space-3)' }}>{poi.name_vi}</h3>
                  <p style={{
                    color: 'var(--color-text-light)',
                    fontSize: 'var(--text-sm)',
                    marginBottom: 'var(--space-4)',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {poi.description_vi}
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                    {poi.tags_vi.slice(0, 2).map((tag, index) => (
                      <span key={index} className="badge badge-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/poi/${poi.id}`} className="btn btn-primary" style={{ width: '100%' }}>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-background-card)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                Về Bản Yên Hoà
              </h2>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Bản Yên Hoà là một ngôi làng nhỏ nằm ở Xã Mỹ Lý, Huyện Quế Phong, Tỉnh Nghệ An. 
                Đây là nơi sinh sống của cộng đồng người Thái với những nét văn hóa truyền thống 
                được bảo tồn nguyên vẹn qua nhiều thế hệ.
              </p>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                Với cảnh quan thiên nhiên hùng vĩ, những thửa ruộng bậc thang tuyệt đẹp, 
                và văn hóa đặc sắc, Bản Yên Hoà đang trở thành một điểm đến du lịch 
                bền vững và ý nghĩa cho những ai muốn khám phá vẻ đẹp của Việt Nam.
              </p>
              <Link to="/travel-guide" className="btn btn-primary">
                Tìm hiểu thêm
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600"
                alt="Bản Yên Hoà"
                className="img-responsive img-rounded"
                style={{ boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            <div>
              <h3 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                {pois ? pois.length : 0}+
              </h3>
              <p style={{ color: 'var(--color-text-light)' }}>Điểm tham quan</p>
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                5★
              </h3>
              <p style={{ color: 'var(--color-text-light)' }}>Đánh giá trung bình</p>
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                24/7
              </h3>
              <p style={{ color: 'var(--color-text-light)' }}>Hỗ trợ du khách</p>
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                100%
              </h3>
              <p style={{ color: 'var(--color-text-light)' }}>Trải nghiệm chân thực</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
