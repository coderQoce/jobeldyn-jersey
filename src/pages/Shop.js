import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import ProductSection from '../components/ProductSection';
import './Shop.css';

const Shop = ({ onAddToCart, cartCount, onCartClick }) => {
  const navigate = useNavigate();

  return (
    <div className="shop-page">
      <div className="shop-top-nav">
        <button className="back-home-btn" onClick={() => navigate('/')}>
          <ChevronLeft size={20} />
          Back to Home
        </button>
      </div>
      <ProductSection onAddToCart={onAddToCart} />

      {/* Mobile Bottom Cart Icon */}
      <div className="bottom-cart-icon-mobile">
        <button className="bottom-cart-btn" onClick={onCartClick}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="bottom-cart-badge">{cartCount}</span>}
        </button>
      </div>
    </div>
  );
};

export default Shop;
