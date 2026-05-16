import React from 'react';
import ProductCard from './ProductCard';
import './NewArrivalsSection.css';

const NewArrivalsSection = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Bayern New Season Jersey',
      price: 17000.00,
      customizedPrice: 20000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na1.jpg',
      playerImage: '/Assets/products/New Arrival/na1.jpg',
      category: 'Club'
    },
    {
      id: 2,
      name: 'Dortmund',
      price: 17000.00,
      customizedPrice: 20000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na2.jpg',
      playerImage: '/Assets/products/New Arrival/na2.jpg',
      category: 'Club'
    },
    {
      id: 3,
      name: 'PSG',
      price: 17000.00,
      customizedPrice: 20000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na3.jpg',
      playerImage: '/Assets/products/New Arrival/na3.jpg',
      category: 'Club'
    }
  ];

  return (
    <section className="new-arrivals-section">
      <div className="section-container">
        <div className="section-header">
          <div className="header-decoration left"></div>
          <div className="header-content">
            <p className="header-subtitle">Discover Our Collection</p>
            <h2 className="section-title">Latest Products</h2>
            <p className="header-description">Curated premium pieces for the modern wardrobe</p>
          </div>
          <div className="header-decoration right"></div>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
