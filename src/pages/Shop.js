import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductSection from '../components/ProductSection';
import './Shop.css';

const Shop = ({ onAddToCart }) => {
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
    </div>
  );
};

export default Shop;
