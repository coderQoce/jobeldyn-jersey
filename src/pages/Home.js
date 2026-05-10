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
        name: 'Adidas Classic Tracksuit',
        category: 'Tracksuits',
        price: 45000,
        playerPrice: 55000,
        image: 'https://via.placeholder.com/300x300?text=Tracksuit+1',
        playerImage: 'https://via.placeholder.com/300x300?text=Tracksuit+Player+1',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 2,
        name: 'Nike Pro Tracksuit',
        category: 'Tracksuits',
        price: 50000,
        playerPrice: 60000,
        image: 'https://via.placeholder.com/300x300?text=Tracksuit+2',
        playerImage: 'https://via.placeholder.com/300x300?text=Tracksuit+Player+2',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 3,
        name: 'Puma Elite Tracksuit',
        category: 'Tracksuits',
        price: 48000,
        playerPrice: 58000,
        image: 'https://via.placeholder.com/300x300?text=Tracksuit+3',
        playerImage: 'https://via.placeholder.com/300x300?text=Tracksuit+Player+3',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 4,
        name: 'Adidas Performance Tracksuit',
        category: 'Tracksuits',
        price: 52000,
        playerPrice: 62000,
        image: 'https://via.placeholder.com/300x300?text=Tracksuit+4',
        playerImage: 'https://via.placeholder.com/300x300?text=Tracksuit+Player+4',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
    ],
    nfl: [
      {
        id: 5,
        name: 'NFL Jersey - Cowboys',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: 'https://via.placeholder.com/300x300?text=NFL+1',
        playerImage: 'https://via.placeholder.com/300x300?text=NFL+Player+1',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 6,
        name: 'NFL Jersey - Patriots',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: 'https://via.placeholder.com/300x300?text=NFL+2',
        playerImage: 'https://via.placeholder.com/300x300?text=NFL+Player+2',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 7,
        name: 'NFL Jersey - Lakers',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: 'https://via.placeholder.com/300x300?text=NFL+3',
        playerImage: 'https://via.placeholder.com/300x300?text=NFL+Player+3',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 8,
        name: 'NFL Jersey - Chiefs',
        category: 'NFL Jerseys',
        price: 35000,
        playerPrice: 45000,
        image: 'https://via.placeholder.com/300x300?text=NFL+4',
        playerImage: 'https://via.placeholder.com/300x300?text=NFL+Player+4',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
    ],
    socks: [
      {
        id: 9,
        name: 'Adidas Sports Socks',
        category: 'Socks',
        price: 8000,
        playerPrice: 8000,
        image: 'https://via.placeholder.com/300x300?text=Socks+1',
        playerImage: 'https://via.placeholder.com/300x300?text=Socks+1',
        sizes: ['One Size'],
      },
      {
        id: 10,
        name: 'Nike Elite Socks',
        category: 'Socks',
        price: 9000,
        playerPrice: 9000,
        image: 'https://via.placeholder.com/300x300?text=Socks+2',
        playerImage: 'https://via.placeholder.com/300x300?text=Socks+2',
        sizes: ['One Size'],
      },
      {
        id: 11,
        name: 'NBA Performance Socks',
        category: 'Socks',
        price: 10000,
        playerPrice: 10000,
        image: 'https://via.placeholder.com/300x300?text=Socks+3',
        playerImage: 'https://via.placeholder.com/300x300?text=Socks+3',
        sizes: ['One Size'],
      },
      {
        id: 12,
        name: 'Puma Comfort Socks',
        category: 'Socks',
        price: 7500,
        playerPrice: 7500,
        image: 'https://via.placeholder.com/300x300?text=Socks+4',
        playerImage: 'https://via.placeholder.com/300x300?text=Socks+4',
        sizes: ['One Size'],
      },
    ],
    retro: [
      {
        id: 13,
        name: 'Retro 90s Jersey',
        category: 'Retro Jerseys',
        price: 40000,
        playerPrice: 50000,
        image: 'https://via.placeholder.com/300x300?text=Retro+1',
        playerImage: 'https://via.placeholder.com/300x300?text=Retro+Player+1',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 14,
        name: 'Vintage Classic Jersey',
        category: 'Retro Jerseys',
        price: 42000,
        playerPrice: 52000,
        image: 'https://via.placeholder.com/300x300?text=Retro+2',
        playerImage: 'https://via.placeholder.com/300x300?text=Retro+Player+2',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 15,
        name: 'Old School Legend Jersey',
        category: 'Retro Jerseys',
        price: 45000,
        playerPrice: 55000,
        image: 'https://via.placeholder.com/300x300?text=Retro+3',
        playerImage: 'https://via.placeholder.com/300x300?text=Retro+Player+3',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      {
        id: 16,
        name: 'Throwback Premium Jersey',
        category: 'Retro Jerseys',
        price: 48000,
        playerPrice: 58000,
        image: 'https://via.placeholder.com/300x300?text=Retro+4',
        playerImage: 'https://via.placeholder.com/300x300?text=Retro+Player+4',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
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
