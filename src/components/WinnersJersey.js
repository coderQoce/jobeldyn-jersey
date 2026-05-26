import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './WinnersJersey.css';

const WinnersJersey = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1200) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products = [
    { id: 23, name: 'Arsenal', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/arsenal-home.jpg', away: '/Assets/products/Club Jersey/arsenal-away.jpg', third: '/Assets/products/Club Jersey/arsenal-third.jpg' }, image: '/Assets/products/Club Jersey/arsenal-home.jpg', playerImage: '/Assets/products/Club Jersey/arsenal-home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 24, name: 'Barcelona', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/barca-home.jpg', away: '/Assets/products/Club Jersey/barca-away.jpg', third: '/Assets/products/Club Jersey/barca-third.jpg' }, image: '/Assets/products/Club Jersey/barca-home.jpg', playerImage: '/Assets/products/Club Jersey/barca-home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 32, name: 'PSG', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/psg-home.jpg', away: '/Assets/products/Club Jersey/psg-away.jpg', third: '/Assets/products/Club Jersey/psg-third.jpg' }, image: '/Assets/products/Club Jersey/psg-home.jpg', playerImage: '/Assets/products/Club Jersey/psg-home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 27, name: 'Inter Milan', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/inter-home.jpg', away: '/Assets/products/Club Jersey/inter-away.jpg', third: '/Assets/products/Club Jersey/inter-third.jpg' }, image: '/Assets/products/Club Jersey/inter-home.jpg', playerImage: '/Assets/products/Club Jersey/inter-home.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 33, name: 'Bayern Munich', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/bayern-jome.jpg', away: '/Assets/products/Club Jersey/bayern-away.jpg', third: '/Assets/products/Club Jersey/bayern-third.jpg' }, image: '/Assets/products/Club Jersey/bayern-jome.jpg', playerImage: '/Assets/products/Club Jersey/bayern-jome.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
  ];

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
        <div className="winners-products-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="slider-navigation">
          <button className="slider-button prev" onClick={prevSlide}>
            ‹
          </button>

          <div className="slider-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <button className="slider-button next" onClick={nextSlide}>
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default WinnersJersey;
