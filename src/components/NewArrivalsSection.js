import React from 'react';
import ProductCard from './ProductCard';
import './NewArrivalsSection.css';

const NewArrivalsSection = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Bayern New Season Jersey',
      price: 912.98,
      playerPrice: 1050.00,
      image: '/Assets/products/New Arrival/na1.jpg',
      playerImage: '/Assets/products/New Arrival/na1.jpg',
      category: 'Shirts'
    },
    {
      id: 2,
      name: 'Dortmund',
      price: 890.98,
      playerPrice: 1020.00,
      image: '/Assets/products/New Arrival/na2.jpg',
      playerImage: '/Assets/products/New Arrival/na2.jpg',
      category: 'Shirts'
    },
    {
      id: 3,
      name: 'PSG',
      price: 629.98,
      playerPrice: 750.00,
      image: '/Assets/products/New Arrival/na3.jpg',
      playerImage: '/Assets/products/New Arrival/na3.jpg',
      category: 'Shirts'
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
