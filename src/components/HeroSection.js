import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import './HeroSection.css';

const HeroSection = ({ cartCount, onCartClick }) => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [
    '/Assets/hero1.jpg',
    '/Assets/hero2.jpg',
    '/Assets/hero3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToProducts = () => {
    const element = document.querySelector('.category-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImages[currentHeroIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-overlay"></div>

      {/* Navbar inside Hero */}
      <Navbar cartCount={cartCount} onCartClick={onCartClick} isInHero={true} />

      <div className="hero-content">
        <h1 className="hero-title">WEAR THE PASSION</h1>
        <h2 className="hero-subtitle-main">WEAR THE BADGE</h2>
        <p className="hero-subtitle">Built For Champions • Driven By Culture • Inspired By Greatness</p>
        <p className="hero-description"></p>
        <div>
          <button className="btn-hero" onClick={scrollToProducts}>
            SHOP NOW
          </button>
          <button className="btn-hero secondary" onClick={scrollToProducts}>
            NEW ARRIVALS
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={heroImages[currentHeroIndex]} alt="Hero" className="hero-image" />
      </div>

      <button className="scroll-indicator" onClick={scrollToProducts}>
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
