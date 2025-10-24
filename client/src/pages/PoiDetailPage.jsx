import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';

const PoiDetailPage = () => {
  const { id } = useParams();
  const [poi, setPoi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchPOI = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/pois/${id}`);
        setPoi(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching POI:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPOI();
    }
  }, [id]);

  const nextImage = () => {
    if (poi && poi.imageURLs.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % poi.imageURLs.length);
    }
  };

  const prevImage = () => {
    if (poi && poi.imageURLs.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + poi.imageURLs.length) % poi.imageURLs.length);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 'var(--space-16)' }}>
        <div className="loading-spinner" style={{ margin: '0 auto' }}></div>
        <p style={{ marginTop: 'var(--space-4)' }}>Đang tải thông tin...</p>
      </div>
    );
  }

  if (error || !poi) {
    return (
      <div style={{ textAlign: 'center', padding: 'var(--space-16)' }}>
        <h2 style={{ color: 'var(--color-error)', marginBottom: 'var(--space-4)' }}>
          Không tìm thấy thông tin
        </h2>
        <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-6)' }}>
          {error || 'Điểm tham quan không tồn tại hoặc đã bị xóa.'}
        </p>
        <Link to="/" className="btn btn-primary">
          Về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section style={{ backgroundColor: 'var(--color-background-card)', padding: 'var(--space-4) 0' }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Link to="/" style={{ color: 'var(--color-text-light)' }}>Trang chủ</Link>
            <span style={{ color: 'var(--color-neutral)' }}>/</span>
            <Link to="/attractions" style={{ color: 'var(--color-text-light)' }}>Điểm tham quan</Link>
            <span style={{ color: 'var(--color-neutral)' }}>/</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 'var(--weight-semibold)' }}>
              {poi.name_vi}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <img
          src={poi.imageURLs[currentImageIndex] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200'}
          alt={poi.name_vi}
          className="img-responsive"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        
        {/* Image Navigation */}
        {poi.imageURLs.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: 'var(--space-4)',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                width: '50px',
                height: '50px',
                fontSize: 'var(--text-xl)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: 'var(--space-4)',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                width: '50px',
                height: '50px',
                fontSize: 'var(--text-xl)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Image Indicators */}
        {poi.imageURLs.length > 1 && (
          <div style={{
            position: 'absolute',
            bottom: 'var(--space-4)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 'var(--space-2)'
          }}>
            {poi.imageURLs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        )}

        {/* Rating Badge */}
        <div style={{
          position: 'absolute',
          top: 'var(--space-4)',
          right: 'var(--space-4)',
          backgroundColor: 'var(--color-accent)',
          color: 'white',
          padding: 'var(--space-2) var(--space-4)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--weight-semibold)'
        }}>
          ⭐ {poi.rating}
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
            {/* Left Column - Main Info */}
            <div>
              <h1 style={{ marginBottom: 'var(--space-4)' }}>{poi.name_vi}</h1>
              
              <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
                {poi.tags_vi.map((tag, index) => (
                  <span key={index} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginBottom: 'var(--space-6)' }}>
                <h3 style={{ marginBottom: 'var(--space-3)', color: 'var(--color-primary)' }}>
                  Mô tả
                </h3>
                <p style={{ lineHeight: 1.6, color: 'var(--color-text-light)' }}>
                  {poi.description_vi}
                </p>
              </div>

              {/* Image Gallery */}
              {poi.imageURLs.length > 1 && (
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ marginBottom: 'var(--space-3)', color: 'var(--color-primary)' }}>
                    Thư viện ảnh
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 'var(--space-2)' }}>
                    {poi.imageURLs.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`${poi.name_vi} - Ảnh ${index + 1}`}
                        onClick={() => setCurrentImageIndex(index)}
                        style={{
                          width: '100%',
                          height: '80px',
                          objectFit: 'cover',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          border: index === currentImageIndex ? '3px solid var(--color-primary)' : '1px solid var(--color-border)',
                          transition: 'border-color var(--transition-fast)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Practical Info */}
            <div>
              <div className="card">
                <div className="card-header">
                  <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>
                    Thông tin thực tế
                  </h3>
                </div>
                <div className="card-body">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <div>
                      <h4 style={{ margin: '0 0 var(--space-2) 0', color: 'var(--color-text)' }}>
                        📍 Địa chỉ
                      </h4>
                      <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                        {poi.address_vi}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ margin: '0 0 var(--space-2) 0', color: 'var(--color-text)' }}>
                        🕒 Giờ mở cửa
                      </h4>
                      <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                        {poi.operating_hours_vi}
                      </p>
                    </div>

                    {poi.contact_info?.phone && (
                      <div>
                        <h4 style={{ margin: '0 0 var(--space-2) 0', color: 'var(--color-text)' }}>
                          📞 Liên hệ
                        </h4>
                        <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                          {poi.contact_info.phone}
                        </p>
                      </div>
                    )}

                    {poi.contact_info?.email && (
                      <div>
                        <h4 style={{ margin: '0 0 var(--space-2) 0', color: 'var(--color-text)' }}>
                          ✉️ Email
                        </h4>
                        <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                          {poi.contact_info.email}
                        </p>
                      </div>
                    )}

                    <div>
                      <h4 style={{ margin: '0 0 var(--space-2) 0', color: 'var(--color-text)' }}>
                        ⭐ Đánh giá
                      </h4>
                      <div className="rating">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={index < poi.rating ? 'star' : 'star empty'}
                          >
                            ★
                          </span>
                        ))}
                        <span style={{ marginLeft: 'var(--space-2)', color: 'var(--color-text-light)' }}>
                          ({poi.rating}/5)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" style={{ width: '100%' }}>
                    📞 Liên hệ đặt tour
                  </button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card" style={{ marginTop: 'var(--space-6)' }}>
                <div className="card-header">
                  <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>
                    📍 Vị trí trên bản đồ
                  </h3>
                </div>
                <div className="card-body" style={{ padding: 0 }}>
                  <div style={{
                    height: '200px',
                    backgroundColor: 'var(--color-background-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-light)'
                  }}>
                    🗺️ Bản đồ tương tác sẽ được tích hợp ở đây
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related POIs */}
      <section className="section" style={{ backgroundColor: 'var(--color-background-card)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            Điểm tham quan liên quan
          </h2>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-6)' }}>
              Khám phá thêm những điểm đến thú vị khác tại Bản Yên Hoà
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/attractions" className="btn btn-primary">
                Xem tất cả điểm tham quan
              </Link>
              <Link to="/cuisine" className="btn btn-secondary">
                Khám phá ẩm thực
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoiDetailPage;
