import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/EliteVersion/e18.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e18.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 4, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n1.jpg', playerImage: '/Assets/products/NFL/n1.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { id: 60, name: 'NBA Socks', category: 'Socks', price: 6000, playerPrice: 6000, image: '/Assets/products/Socks/Nba.jpg', playerImage: '/Assets/products/Socks/Nba.jpg', sizes: ['One Size'] },
    { id: 10, name: 'Manchester United Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/manchester-united2.jpg', playerImage: '/Assets/products/Retro Jersey/manchester-united2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 23, name: 'Arsenal', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/arsenal-home.jpg', away: '/Assets/products/Club Jersey/arsenal-away.jpg', third: '/Assets/products/Club Jersey/arsenal-third.jpg' }, image: '/Assets/products/Club Jersey/arsenal-home.jpg', playerImage: '/Assets/products/Club Jersey/arsenal-home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 37, name: 'Brazil', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/brazil-home.jpg', away: '/Assets/products/Country Jersey/brazil-away.jpg' }, image: '/Assets/products/Country Jersey/brazil-home.jpg', playerImage: '/Assets/products/Country Jersey/brazil-home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
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
