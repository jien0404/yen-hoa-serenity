import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/attractions', label: 'Điểm tham quan' },
    { path: '/cuisine', label: 'Ẩm thực' },
    { path: '/travel-guide', label: 'Hướng dẫn du lịch' }
  ];

  return (
    <header style={{
      backgroundColor: 'var(--color-background-white)',
      boxShadow: 'var(--shadow-md)',
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-sticky)'
    }}>
      <div className="container">
        <div className="flex items-center justify-between" style={{ padding: 'var(--space-4) 0' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--weight-bold)'
              }}>
                YH
              </div>
              <div>
                <h1 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--weight-semibold)',
                  color: 'var(--color-primary)',
                  margin: 0
                }}>
                  Yên Hoà Serenity
                </h1>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-light)',
                  margin: 0
                }}>
                  Du lịch Bản Yên Hoà
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', gap: 'var(--space-8)' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: isActive(item.path) ? 'var(--color-primary)' : 'var(--color-text)',
                  fontWeight: isActive(item.path) ? 'var(--weight-semibold)' : 'var(--weight-regular)',
                  textDecoration: 'none',
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive(item.path) ? 'var(--color-background-card)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = 'var(--color-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = 'var(--color-text)';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: 'var(--text-xl)',
              cursor: 'pointer',
              color: 'var(--color-primary)'
            }}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            padding: 'var(--space-4) 0',
            borderTop: '1px solid var(--color-border)'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: isActive(item.path) ? 'var(--color-primary)' : 'var(--color-text)',
                  fontWeight: isActive(item.path) ? 'var(--weight-semibold)' : 'var(--weight-regular)',
                  textDecoration: 'none',
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive(item.path) ? 'var(--color-background-card)' : 'transparent'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
