import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './NewArrivalsSection.css';

const NewArrivalsSection = ({ onAddToCart }) => {
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
    {
      id: 1,
      name: 'Bayern New Season Jersey',
      price: 20000.00,
      customizedPrice: 23000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na1.jpg',
      playerImage: '/Assets/products/New Arrival/na1.jpg',
      category: 'Club'
    },
    {
      id: 2,
      name: 'Dortmund',
      price: 20000.00,
      customizedPrice: 23000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na2.jpg',
      playerImage: '/Assets/products/New Arrival/na2.jpg',
      category: 'Club'
    },
    {
      id: 3,
      name: 'PSG',
      price: 20000.00,
      customizedPrice: 23000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na3.jpg',
      playerImage: '/Assets/products/New Arrival/na3.jpg',
      category: 'Club'
    },
    {
      id: 4,
      name: 'Manchester United',
      price: 20000.00,
      customizedPrice: 23000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na4.jpg',
      playerImage: '/Assets/products/New Arrival/na4.jpg',
      category: 'Club'
    },
    {
      id: 5,
      name: 'Arsenal',
      price: 20000.00,
      customizedPrice: 23000.00,
      playerPrice: 25000.00,
      playerCustomizedPrice: 28000.00,
      image: '/Assets/products/New Arrival/na5.jpg',
      playerImage: '/Assets/products/New Arrival/na5.jpg',
      category: 'Club'
    }
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

        <div className="new-arrivals-slider-container">
          <div className="new-arrivals-products-grid">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                hideKitToggle={true}
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
      </div>
    </section>
  );
};

export default NewArrivalsSection;
