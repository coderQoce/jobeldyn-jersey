import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Adidas Tracksuit', category: 'Tracksuits', price: 2500.00, classicPrice: 2500.00, elitePrice: 3000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c1.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 4, name: 'NFL Jersey', category: 'NFL', price: 1500.00, image: '/Assets/products/NFL/n1.jpg', playerImage: '/Assets/products/NFL/n1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 7, name: 'Adidas Socks', category: 'Socks', price: 500.00, image: '/Assets/products/Socks/s1.jpg', playerImage: '/Assets/products/Socks/s1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 10, name: 'Barcelona Retro Jersey', category: 'Retro', price: 1800.00, playerPrice: 2100.00, image: '/Assets/products/Retro Jersey/FanVersion/f1.jpg', playerImage: '/Assets/products/Retro Jersey/PlayerVersion/p1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 19, name: 'Chelsea', category: 'Club', price: 1800.00, playerPrice: 2100.00, kits: { home: '/Assets/products/Club Jersey/Chelsea/home.jpg', away: '/Assets/products/Club Jersey/Chelsea/away.jpg', third: '/Assets/products/Club Jersey/Chelsea/third.jpg' }, image: '/Assets/products/Club Jersey/Chelsea/home.jpg', playerImage: '/Assets/products/Club Jersey/Chelsea/home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 36, name: 'Nigeria', category: 'Country', price: 1700.00, playerPrice: 2000.00, kits: { home: '/Assets/products/Country Jersey/Nigeria/home.jpg', away: '/Assets/products/Country Jersey/Nigeria/away.jpg' }, image: '/Assets/products/Country Jersey/Nigeria/home.jpg', playerImage: '/Assets/products/Country Jersey/Nigeria/home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
  ];

  return (
    <section className="featured-products">
      <div className="featured-header">
        <div className="header-decoration left"></div>
        <div className="header-content">
          <p className="header-subtitle">Shop Collection</p>
          <h2 className="section-title">Featured Products</h2>
          <p className="header-description">Explore our premium selection</p>
        </div>
        <div className="header-decoration right"></div>
      </div>

      <div className="featured-products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      <div className="featured-footer">
        <button className="btn-go-to-shop" onClick={() => navigate('/shop')}>
          Go to Shop <span className="shop-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
