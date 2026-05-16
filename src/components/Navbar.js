import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick, isInHero = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavClick = (target) => {
    window.location.href = `/#${target}`;
  };

  const handleCategoryClick = (category) => {
    window.location.href = `/#${category}`;
  };

  const navItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'New Arrival', target: 'new-arrivals', hasDropdown: false },
    { name: 'Featured', target: 'featured', hasDropdown: false, isHash: true },
    { name: 'Shop', path: '/shop', hasDropdown: false },
    { name: 'Request', target: 'request-jersey', hasDropdown: false },
    { name: 'Contact Us', target: 'contact', hasDropdown: false },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <nav className={`navbar-modern ${isInHero ? 'navbar-in-hero' : ''}`}>
        <div className="navbar-modern-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src="/Assets/logo.jpg" alt="JOBELDN Logo" className="logo-img" />
            <span className="logo-text font-bebas">JOBELDN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu-modern">
            {navItems.map((item) => (
              <div key={item.name} className="nav-item-wrapper">
                {item.hasDropdown ? (
                  <div
                    className="dropdown-container"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="nav-link-modern dropdown-toggle">
                      {item.name}
                    </button>
                    {openDropdown === item.name && (
                      <div className="dropdown-menu show">
                        {item.submenu.map((sub) => (
                          <button
                            key={sub.category}
                            onClick={() => handleCategoryClick(sub.category)}
                            className="dropdown-item"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.path ? (
                    <Link
                      to={item.path}
                      className="nav-link-modern"
                    >
                      {item.name}
                    </Link>
                  ) : item.isHash ? (
                    <button
                      onClick={() => {
                        window.location.href = `/#${item.target}`;
                      }}
                      className="nav-link-modern"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.target)}
                      className="nav-link-modern"
                    >
                      {item.name}
                    </button>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="navbar-icons-modern">
            <button className="icon-btn-modern">
              <Heart size={20} />
            </button>
            <button className="icon-btn-modern cart-btn-modern" onClick={onCartClick}>
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge-modern">{cartCount}</span>}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn-modern"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="navbar-menu-mobile-modern">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      className="mobile-nav-link-modern"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown size={16} className={openDropdown === item.name ? 'open' : ''} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="mobile-dropdown">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="mobile-dropdown-item"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.path ? (
                  <Link
                    to={item.path}
                    className="mobile-nav-link-modern"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="mobile-nav-link-modern"
                    onClick={() => {
                      window.location.href = `/#${item.target}`;
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}

            {/* Mobile Menu Icons */}
            <div className="mobile-menu-icons">
              <button className="mobile-icon-btn">
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
              <button className="mobile-icon-btn" onClick={onCartClick}>
                <ShoppingCart size={20} />
                <span>Cart</span>
                {cartCount > 0 && <span className="mobile-cart-badge">{cartCount}</span>}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Cart Icon */}
      <div className="bottom-cart-icon-mobile">
        <button className="bottom-cart-btn" onClick={onCartClick}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="bottom-cart-badge">{cartCount}</span>}
        </button>
      </div>
    </>
  );
};

export default Navbar;
