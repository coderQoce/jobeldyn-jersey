import React from 'react';
import HeroSection from '../components/HeroSection';
import NewArrivalsSection from '../components/NewArrivalsSection';
import FeaturedProducts from '../components/FeaturedProducts';
import JerseyCreator from '../components/JerseyCreator';
import RequestJersey from '../components/RequestJersey';
import ContactUs from '../components/ContactUs';
import './Home.css';

const Home = ({ onAddToCart, cartCount, onCartClick }) => {
  // eslint-disable-next-line no-unused-vars
  const products = {
    tracksuits: [
      {
        id: 1,
        name: 'Classic Tracksuit',
        category: 'Tracksuits',
        price: 25000,
        classicPrice: 25000,
        elitePrice: 65000,
        image: '/Assets/products/Tracksuit/ClassicVersion/c1.jpg',
        playerImage: '/Assets/products/Tracksuit/EliteVersion/e1.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        id: 2,
        name: 'Classic Tracksuit',
        category: 'Tracksuits',
        price: 25000,
        classicPrice: 25000,
        elitePrice: 65000,
        image: '/Assets/products/Tracksuit/ClassicVersion/c2.jpg',
        playerImage: '/Assets/products/Tracksuit/EliteVersion/e2.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        id: 3,
        name: 'Elite Tracksuit',
        category: 'Tracksuits',
        price: 65000,
        classicPrice: 25000,
        elitePrice: 65000,
        image: '/Assets/products/Tracksuit/EliteVersion/e3.jpg',
        playerImage: '/Assets/products/Tracksuit/EliteVersion/e3.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        id: 4,
        name: 'Elite Tracksuit',
        category: 'Tracksuits',
        price: 65000,
        classicPrice: 25000,
        elitePrice: 65000,
        image: '/Assets/products/Tracksuit/EliteVersion/e4.jpg',
        playerImage: '/Assets/products/Tracksuit/EliteVersion/e4.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
    ],
    nfl: [
      {
        id: 5,
        name: 'NFL Jersey',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: '/Assets/products/NFL/n1.jpg',
        playerImage: '/Assets/products/NFL/n1.jpg',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 6,
        name: 'NFL Jersey',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: '/Assets/products/NFL/n2.jpg',
        playerImage: '/Assets/products/NFL/n2.jpg',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 7,
        name: 'NFL Jersey',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: '/Assets/products/NFL/n3.jpg',
        playerImage: '/Assets/products/NFL/n3.jpg',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 8,
        name: 'NFL Jersey',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: '/Assets/products/NFL/n4.jpg',
        playerImage: '/Assets/products/NFL/n4.jpg',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 12,
        name: 'NFL Jersey',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: '/Assets/products/NFL/n5.jpg',
        playerImage: '/Assets/products/NFL/n5.jpg',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 13,
        name: 'NFL Jersey',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: '/Assets/products/NFL/n6.jpg',
        playerImage: '/Assets/products/NFL/n6.jpg',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
    ],
    socks: [
      {
        id: 9,
        name: 'NBA Socks',
        category: 'Socks',
        price: 5000,
        playerPrice: 5000,
        image: '/Assets/products/Socks/Nba.jpg',
        playerImage: '/Assets/products/Socks/Nba.jpg',
        sizes: ['One Size'],
      },
      {
        id: 10,
        name: 'Adidas & Nike Socks',
        category: 'Socks',
        price: 6000,
        playerPrice: 6000,
        image: '/Assets/products/Socks/adidas and nike collection.jpg',
        playerImage: '/Assets/products/Socks/adidas and nike collection.jpg',
        sizes: ['One Size'],
      },
    ],
    retro: [
      {
        id: 13,
        name: 'Manchester United Retro Jersey',
        category: 'Retro Jerseys',
        price: 25000,
        playerPrice: 30000,
        image: '/Assets/products/Retro Jersey/Manchester-United.jpg',
        playerImage: '/Assets/products/Retro Jersey/Manchester-United.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        id: 14,
        name: 'Arsenal Retro Jersey',
        category: 'Retro Jerseys',
        price: 25000,
        playerPrice: 30000,
        image: '/Assets/products/Retro Jersey/arsenal.jpg',
        playerImage: '/Assets/products/Retro Jersey/arsenal.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        id: 15,
        name: 'Liverpool Retro Jersey',
        category: 'Retro Jerseys',
        price: 25000,
        playerPrice: 30000,
        image: '/Assets/products/Retro Jersey/liverpool.jpg',
        playerImage: '/Assets/products/Retro Jersey/liverpool.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
      {
        id: 16,
        name: 'Brazil Retro Jersey',
        category: 'Retro Jerseys',
        price: 25000,
        playerPrice: 30000,
        image: '/Assets/products/Retro Jersey/brazil.jpg',
        playerImage: '/Assets/products/Retro Jersey/brazil.jpg',
        sizes: ['M', 'L', 'XL', 'XXL'],
      },
    ],
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div id="home">
        <HeroSection cartCount={cartCount} onCartClick={onCartClick} />
      </div>

      {/* New Arrivals Section */}
      <div id="new-arrivals">
        <NewArrivalsSection onAddToCart={onAddToCart} />
      </div>

      {/* Featured Products Section */}
      <div id="featured">
        <FeaturedProducts onAddToCart={onAddToCart} />
      </div>

      {/* Request Jersey Section */}
      <div id="request-jersey">
        <RequestJersey />
      </div>

      {/* Jersey Creator Section (Carousel) */}
      <JerseyCreator />

      {/* Contact Us Section */}
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
