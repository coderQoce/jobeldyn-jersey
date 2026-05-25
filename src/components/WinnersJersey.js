import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './WinnersJersey.css';

const WinnersJersey = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 23, name: 'Arsenal', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/arsenal-home.jpg', away: '/Assets/products/Club Jersey/arsenal-away.jpg', third: '/Assets/products/Club Jersey/arsenal-third.jpg' }, image: '/Assets/products/Club Jersey/arsenal-home.jpg', playerImage: '/Assets/products/Club Jersey/arsenal-home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 24, name: 'Barcelona', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/Barcelona/home.jpg', away: '/Assets/products/Club Jersey/Barcelona/away.jpg', third: '/Assets/products/Club Jersey/Barcelona/third.jpg' }, image: '/Assets/products/Club Jersey/Barcelona/home.jpg', playerImage: '/Assets/products/Club Jersey/Barcelona/home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 32, name: 'PSG', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/PSG/home.jpg', away: '/Assets/products/Club Jersey/PSG/away.jpg', third: '/Assets/products/Club Jersey/PSG/third.jpg' }, image: '/Assets/products/Club Jersey/PSG/home.jpg', playerImage: '/Assets/products/Club Jersey/PSG/home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 27, name: 'Inter Milan', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/InterMilan/home.jpg', away: '/Assets/products/Club Jersey/InterMilan/away.jpg', third: '/Assets/products/Club Jersey/InterMilan/third.jpg' }, image: '/Assets/products/Club Jersey/InterMilan/home.jpg', playerImage: '/Assets/products/Club Jersey/InterMilan/home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 33, name: 'Bayern Munich', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/BayernMunich/home.jpg', away: '/Assets/products/Club Jersey/BayernMunich/away.jpg', third: '/Assets/products/Club Jersey/BayernMunich/third.jpg' }, image: '/Assets/products/Club Jersey/BayernMunich/home.jpg', playerImage: '/Assets/products/Club Jersey/BayernMunich/home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
  ];

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const displayedProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="winners-jersey">
      <div className="winners-header">
        <div className="header-decoration left"></div>
        <div className="header-content">
          <p className="header-subtitle">Champions Collection</p>
          <h2 className="section-title">Winners Jersey</h2>
          <p className="header-description">Wear the glory of champions</p>
        </div>
        <div className="header-decoration right"></div>
      </div>

      <div className="winners-slider-container">
        {totalSlides > 1 && (
          <button className="slider-button prev" onClick={prevSlide}>
            ‹
          </button>
        )}

        <div className="winners-products-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {totalSlides > 1 && (
          <button className="slider-button next" onClick={nextSlide}>
            ›
          </button>
        )}
      </div>

      {totalSlides > 1 && (
        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WinnersJersey;
