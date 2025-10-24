import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePOIs } from '../hooks/usePOIs';

const CuisinePage = () => {
  const { pois, loading, error } = usePOIs();
  const [cuisinePOIs, setCuisinePOIs] = useState([]);

  useEffect(() => {
    if (pois) {
      const cuisine = pois.filter(poi => poi.type === 'cuisine');
      setCuisinePOIs(cuisine);
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
        background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)',
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
            Ẩm thực Bản Yên Hoà
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-8)',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto var(--space-8) auto'
          }}>
            Khám phá hương vị đặc sản của vùng đất Tây Bắc với những món ăn 
            truyền thống được chế biến từ nguyên liệu tươi ngon của địa phương.
          </p>
        </div>
      </section>

      {/* Cuisine Introduction */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                Hương vị truyền thống
              </h2>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Ẩm thực Bản Yên Hoà mang đậm nét văn hóa của người Thái với những món ăn 
                được chế biến từ nguyên liệu tự nhiên như gạo nếp, cá suối, rau rừng, 
                và các loại gia vị đặc trưng của vùng núi.
              </p>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                Mỗi món ăn đều kể một câu chuyện về cuộc sống, văn hóa và tình yêu 
                của người dân địa phương dành cho quê hương mình.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600"
                alt="Ẩm thực Bản Yên Hoà"
                className="img-responsive img-rounded"
                style={{ boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section" style={{ backgroundColor: 'var(--color-background-card)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            Món ăn đặc sản
          </h2>
          
          {cuisinePOIs.length > 0 ? (
            <div className="grid grid-2">
              {cuisinePOIs.map((poi) => (
                <div key={poi.id} className="card">
                  <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                    <img
                      src={poi.imageURLs[0] || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600'}
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
                      marginBottom: 'var(--space-4)',
                      lineHeight: 1.6
                    }}>
                      {poi.description_vi}
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
                      {poi.tags_vi.map((tag, index) => (
                        <span key={index} className="badge badge-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', margin: 0 }}>
                        📍 {poi.address_vi}
                      </p>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', margin: 'var(--space-1) 0 0 0' }}>
                        🕒 {poi.operating_hours_vi}
                      </p>
                      {poi.contact_info?.phone && (
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', margin: 'var(--space-1) 0 0 0' }}>
                          📞 {poi.contact_info.phone}
                        </p>
                      )}
                    </div>
                    <Link to={`/poi/${poi.id}`} className="btn btn-primary" style={{ width: '100%' }}>
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--space-16)' }}>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-lg)' }}>
                Đang cập nhật thông tin ẩm thực...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Traditional Cooking Methods */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            Phương pháp chế biến truyền thống
          </h2>
          <div className="grid grid-3">
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-4) auto',
                fontSize: 'var(--text-2xl)',
                color: 'white'
              }}>
                🔥
              </div>
              <h3 style={{ marginBottom: 'var(--space-3)' }}>Nướng than</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Các món thịt và cá được nướng trên than củi, 
                tạo hương vị đặc trưng và thơm ngon.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-secondary)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-4) auto',
                fontSize: 'var(--text-2xl)',
                color: 'white'
              }}>
                🍃
              </div>
              <h3 style={{ marginBottom: 'var(--space-3)' }}>Gói lá</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Cơm lam và các món ăn được gói trong lá chuối, 
                lá dong để giữ nguyên hương vị tự nhiên.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-4) auto',
                fontSize: 'var(--text-2xl)',
                color: 'white'
              }}>
                🌿
              </div>
              <h3 style={{ marginBottom: 'var(--space-3)' }}>Gia vị rừng</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Sử dụng các loại gia vị tự nhiên từ rừng như 
                lá chanh, sả, gừng, tỏi rừng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuisinePage;
