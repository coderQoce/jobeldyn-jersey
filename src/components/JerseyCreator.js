import React, { useState, useEffect } from 'react';
import './JerseyCreator.css';

const JerseyCreator = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const categories = [
    { name: 'Tracksuits', image: '/Assets/creators/creator1.jpg' },
    { name: 'NFL Jerseys', image: '/Assets/creators/creator1.jpg' },
    { name: 'Socks', image: '/Assets/creators/creator1.jpg' },
    { name: 'Teens Jerseys', image: '/Assets/creators/creator1.jpg' },
    { name: 'Retro Jerseys', image: '/Assets/creators/creator1.jpg' },
    { name: 'Special Edition', image: '/Assets/creators/creator1.jpg' },
    { name: 'Club Jerseys', image: '/Assets/creators/creator1.jpg' },
    { name: 'Country Jerseys', image: '/Assets/creators/creator1.jpg' }
  ];

  const scrollingItems = [
    'Tracksuits',
    'NFL Jerseys',
    'Socks',
    'Teens Jerseys',
    'Retro Jerseys',
    'Special Edition',
    'Club Jerseys',
    'Country Jerseys'
  ];

  // Categories carousel auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => (prev + 1) % (categories.length * 100));
    }, 50);
    return () => clearInterval(interval);
  }, [categories.length]);

  return (
    <section className="jersey-creator">
      {/* Categories Carousel */}
      <div className="brands-carousel">
        <div className="brands-track" style={{ transform: `translateX(-${scrollOffset * 2}px)` }}>
          {[...categories, ...categories].map((category, index) => (
            <div key={index} className="brand-item" title={category.name}>
              <img src={category.image} alt={category.name} className="brand-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Jersey Creator Image with Scrolling Text */}
      <div className="jersey-creator-container">
        <div className="jersey-image-wrapper">
          <img
            src="/Assets/creators/1.jpg"
            alt="Jersey Creator"
            className="jersey-image"
          />
          <div className="jersey-text-overlay">
            <div className="scrolling-text-container">
              <div className="scrolling-text">
                {scrollingItems.map((item, index) => (
                  <div key={index} className="text-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JerseyCreator;
