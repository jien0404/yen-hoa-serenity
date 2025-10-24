import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePOIs } from '../hooks/usePOIs';

const AttractionsPage = () => {
  const { pois, loading, error } = usePOIs();
  const [filteredPOIs, setFilteredPOIs] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (pois) {
      let filtered = pois.filter(poi => poi.type === 'attraction' || poi.type === 'culture' || poi.type === 'activity');
      
      if (selectedType !== 'all') {
        filtered = filtered.filter(poi => poi.type === selectedType);
      }
      
      if (searchTerm) {
        filtered = filtered.filter(poi => 
          poi.name_vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
          poi.description_vi.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      setFilteredPOIs(filtered);
    }
  }, [pois, selectedType, searchTerm]);

  const typeOptions = [
    { value: 'all', label: 'Tất cả' },
    { value: 'attraction', label: 'Điểm tham quan' },
    { value: 'culture', label: 'Văn hóa' },
    { value: 'activity', label: 'Hoạt động' }
  ];

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
    <div className="section">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          Điểm tham quan & Hoạt động
        </h1>

        {/* Search and Filter */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-8)',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <input
              type="text"
              placeholder="Tìm kiếm điểm tham quan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--space-3) var(--space-4)',
                border: '2px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--text-base)',
                outline: 'none',
                transition: 'border-color var(--transition-fast)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              padding: 'var(--space-3) var(--space-4)',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--text-base)',
              outline: 'none',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            {typeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-light)' }}>
          Tìm thấy {filteredPOIs.length} điểm tham quan
        </p>

        {/* POIs Grid */}
        {filteredPOIs.length > 0 ? (
          <div className="grid grid-3">
            {filteredPOIs.map((poi) => (
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
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-4)',
                    left: 'var(--space-4)',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--weight-semibold)',
                    textTransform: 'capitalize'
                  }}>
                    {poi.type}
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
                  <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
                    {poi.tags_vi.slice(0, 3).map((tag, index) => (
                      <span key={index} className="badge badge-secondary">
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
              Không tìm thấy điểm tham quan nào phù hợp với tiêu chí tìm kiếm.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttractionsPage;
