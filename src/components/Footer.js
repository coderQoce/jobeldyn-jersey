import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleNavClick = (target) => {
    window.location.href = `/#${target}`;
  };

  const handleCategoryClick = (category) => {
    window.location.href = `/#${category}`;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/Assets/logo.jpg" alt="JOBELDN Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-desc">Premium sports jerseys and apparel for champions.</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Catalog</h4>
          <ul className="footer-links">
            <li><button onClick={() => handleCategoryClick('all')} className="footer-link-btn">All Products</button></li>
            <li><button onClick={() => handleCategoryClick('tracksuits')} className="footer-link-btn">Tracksuits</button></li>
            <li><button onClick={() => handleCategoryClick('nfl')} className="footer-link-btn">NFL Jerseys</button></li>
            <li><button onClick={() => handleCategoryClick('socks')} className="footer-link-btn">Socks</button></li>
            <li><button onClick={() => handleCategoryClick('teens')} className="footer-link-btn">Teens Jerseys</button></li>
            <li><button onClick={() => handleCategoryClick('retro')} className="footer-link-btn">Retro Jerseys</button></li>
            <li><button onClick={() => handleCategoryClick('special')} className="footer-link-btn">Special Edition</button></li>
            <li><button onClick={() => handleCategoryClick('club')} className="footer-link-btn">Club Jerseys</button></li>
            <li><button onClick={() => handleCategoryClick('country')} className="footer-link-btn">Country Jerseys</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link-btn">Home</Link></li>
            <li><button onClick={() => handleNavClick('new-arrivals')} className="footer-link-btn">New Arrival</button></li>
            <li><button onClick={() => handleNavClick('featured')} className="footer-link-btn">Featured</button></li>
            <li><Link to="/shop" className="footer-link-btn">Shop</Link></li>
            <li><button onClick={() => handleNavClick('request-jersey')} className="footer-link-btn">Request</button></li>
            <li><button onClick={() => handleNavClick('contact')} className="footer-link-btn">Contact Us</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact</h4>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={18} />
              <span>08123409790</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>08125051801</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>info@jobeldn.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Oyo, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 JOBELDN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
