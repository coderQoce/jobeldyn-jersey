import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveCategory(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categories = [
    { id: 'all', label: 'All', title: 'All Products' },
    { id: 'tracksuits', label: 'Tracksuits', title: 'Tracksuits' },
    { id: 'nfl', label: 'NFL Jerseys', title: 'NFL Jerseys' },
    { id: 'socks', label: 'Socks', title: 'Socks' },
    { id: 'teens', label: 'Teens Jerseys', title: 'Teens Jerseys' },
    { id: 'retro', label: 'Retro Jerseys', title: 'Retro Jerseys' },
    { id: 'special', label: 'Special Edition', title: 'Special Edition Jerseys' },
    { id: 'club', label: 'Club Jerseys', title: 'Club Jerseys' },
    { id: 'country', label: 'Country Jerseys', title: 'Country Jerseys' }
  ];

  const products = {
    tracksuits: [
      { id: 73, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e18.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e18.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 3, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e3.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e3.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 49, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e4.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e4.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 50, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e5.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e5.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 51, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e6.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e6.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 63, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e7.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e7.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 64, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e9.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e9.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 65, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e10.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e10.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 66, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e11.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e11.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 67, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e12.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e12.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 68, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e13.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e13.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 69, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e14.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e14.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 70, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e15.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e15.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 71, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e16.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e16.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 72, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e17.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e17.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 1, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c1.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 2, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c2.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 87, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c3.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e3.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 92, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c4.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e4.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 93, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c5.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e5.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 94, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c6.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e6.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    nfl: [
      { id: 4, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n1.jpg', playerImage: '/Assets/products/NFL/n1.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 100, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n2.jpg', playerImage: '/Assets/products/NFL/n2.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 101, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n3.jpg', playerImage: '/Assets/products/NFL/n3.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 102, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n4.jpg', playerImage: '/Assets/products/NFL/n4.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 103, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n5.jpg', playerImage: '/Assets/products/NFL/n5.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 104, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n6.jpg', playerImage: '/Assets/products/NFL/n6.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 105, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n7.jpg', playerImage: '/Assets/products/NFL/n7.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 106, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n8.jpg', playerImage: '/Assets/products/NFL/n8.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 107, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n9.jpg', playerImage: '/Assets/products/NFL/n9.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 52, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n10.jpg', playerImage: '/Assets/products/NFL/n10.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 53, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n11.jpg', playerImage: '/Assets/products/NFL/n11.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 54, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n12.jpg', playerImage: '/Assets/products/NFL/n12.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 55, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n13.jpg', playerImage: '/Assets/products/NFL/n13.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 108, name: 'NFL Jersey', category: 'NFL Jerseys', price: 20000, playerPrice: 20000, image: '/Assets/products/NFL/n14.jpg', playerImage: '/Assets/products/NFL/n14.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
    ],
    socks: [
      { id: 60, name: 'NBA Socks', category: 'Socks', price: 6000, playerPrice: 6000, image: '/Assets/products/Socks/Nba.jpg', playerImage: '/Assets/products/Socks/Nba.jpg', sizes: ['One Size'] },
      { id: 61, name: 'Adidas & Nike Socks', category: 'Socks', price: 6000, playerPrice: 6000, image: '/Assets/products/Socks/adidas and nike collection.jpg', playerImage: '/Assets/products/Socks/adidas and nike collection.jpg', sizes: ['One Size'] },
      { id: 86, name: 'Puma Socks', category: 'Socks', price: 6000, playerPrice: 6000, image: '/Assets/products/Socks/puma.jpg', playerImage: '/Assets/products/Socks/puma.jpg', sizes: ['One Size'] }
    ],
    teens: [
      { id: 13, name: 'Arsenal Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/arsenal-teen.jpg', playerImage: '/Assets/products/Teen/arsenal-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 14, name: 'Manchester United Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/manchester-unitted-teen.jpg', playerImage: '/Assets/products/Teen/manchester-unitted-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 15, name: 'Inter Miami Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/inter-miami-teen.jpg', playerImage: '/Assets/products/Teen/inter-miami-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 85, name: 'Nigeria Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/nigeria-teen.jpg', playerImage: '/Assets/products/Teen/nigeria-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 117, name: 'Real Madrid Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/madrid-teen.jpg', playerImage: '/Assets/products/Teen/madrid-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 118, name: 'Real Madrid Teen Jersey 2', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/madrid2-teen.jpg', playerImage: '/Assets/products/Teen/madrid2-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 119, name: 'Manchester City Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/manchester-city-teen.jpg', playerImage: '/Assets/products/Teen/manchester-city-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 120, name: 'Manchester City Teen Jersey 2', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/manchester-city2-teen.jpg', playerImage: '/Assets/products/Teen/manchester-city2-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 121, name: 'Barcelona Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/bsrcelons-teen.jpg', playerImage: '/Assets/products/Teen/bsrcelons-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 122, name: 'Chelsea Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/chelsea-teen.jpg', playerImage: '/Assets/products/Teen/chelsea-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 123, name: 'England Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/england-teen.jpg', playerImage: '/Assets/products/Teen/england-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 124, name: 'Barcelona Retro Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/barcelona-retro-teen.jpg', playerImage: '/Assets/products/Teen/barcelona-retro-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 125, name: 'Brazil Teen Jersey', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/brazil-teen.jpg', playerImage: '/Assets/products/Teen/brazil-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 126, name: 'Nigeria Teen Jersey 2', category: 'Teens', price: 15000.00, customizedPrice: 18000.00, image: '/Assets/products/Teen/nigeria2-teen.jpg', playerImage: '/Assets/products/Teen/nigeria2-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    retro: [
      { id: 10, name: 'Manchester United Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/Manchester-United.jpg', playerImage: '/Assets/products/Retro Jersey/Manchester-United.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 11, name: 'Arsenal Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/arsenal.jpg', playerImage: '/Assets/products/Retro Jersey/arsenal.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 12, name: 'Liverpool Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/liverpool.jpg', playerImage: '/Assets/products/Retro Jersey/liverpool.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 73, name: 'Chelsea Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/chelsea.jpg', playerImage: '/Assets/products/Retro Jersey/chelsea.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 74, name: 'AC Milan Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/ac-milan.jpg', playerImage: '/Assets/products/Retro Jersey/ac-milan.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 75, name: 'Real Madrid Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/madrid.jpg', playerImage: '/Assets/products/Retro Jersey/madrid.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 76, name: 'Chelsea Retro Jersey 2', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/everton.jpg', playerImage: '/Assets/products/Retro Jersey/everton.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 77, name: 'Spurs Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/Spurs.jpg', playerImage: '/Assets/products/Retro Jersey/Spurs.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 78, name: 'Manchester city Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/argentina.jpg', playerImage: '/Assets/products/Retro Jersey/argentina.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 79, name: 'Manchester city Retro Jersey 2', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/argentina2.jpg', playerImage: '/Assets/products/Retro Jersey/argentina2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 80, name: 'Brazil Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/brazil.jpg', playerImage: '/Assets/products/Retro Jersey/brazil.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 81, name: 'England Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/england.jpg', playerImage: '/Assets/products/Retro Jersey/england.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 82, name: 'Nigeria Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/migeria.jpg', playerImage: '/Assets/products/Retro Jersey/migeria.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 89, name: 'Nigeria Retro Jersey 2', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/migeria2.jpg', playerImage: '/Assets/products/Retro Jersey/migeria2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 83, name: 'Manchester United Retro Jersey 2', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/manchester-united2.jpg', playerImage: '/Assets/products/Retro Jersey/manchester-united2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 84, name: 'Barcelona Retro Jersey', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/barcelona.jpg', playerImage: '/Assets/products/Retro Jersey/barcelona.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 109, name: 'Chelsea Retro Jersey 3', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/chealsea.jpg', playerImage: '/Assets/products/Retro Jersey/chealsea.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 110, name: 'Liverpool Retro Jersey 2', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/liverpool-2.jpg', playerImage: '/Assets/products/Retro Jersey/liverpool-2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 111, name: 'Liverpool Retro Jersey 3', category: 'Retro Jerseys', price: 27000.00, customizedPrice: 30000.00, image: '/Assets/products/Retro Jersey/liverpool-3.jpg', playerImage: '/Assets/products/Retro Jersey/liverpool-3.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    special: [
      { id: 16, name: 'Barcelona Special Edition Jersey', category: 'Special', price: 2500.00, playerPrice: 3000.00, image: '/Assets/products/Special Edition Jersey/s1.jpg', playerImage: '/Assets/products/Special Edition Jersey/barca.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 90, name: 'Barcelona Special Edition Jersey 2', category: 'Special', price: 25000.00, playerPrice: 28000.00, image: '/Assets/products/Special Edition Jersey/barca.jpg', playerImage: '/Assets/products/Special Edition Jersey/barca.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 88, name: 'Portugal Special Edition Jersey', category: 'Special', price: 25000.00, playerPrice: 28000.00, image: '/Assets/products/Special Edition Jersey/portugal-special.jpg', playerImage: '/Assets/products/Special Edition Jersey/portugal-special.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    club: [
      { id: 19, name: 'Chelsea', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/chelsea-home.jpg', away: '/Assets/products/Club Jersey/chelsea-away.jpg', third: '/Assets/products/Club Jersey/chelsea-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 20, name: 'Manchester United', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/manu-home.jpg', away: '/Assets/products/Club Jersey/manu-away.jpg', third: '/Assets/products/Club Jersey/manu-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 21, name: 'Manchester City', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/mancity-home.jpg', away: '/Assets/products/Club Jersey/mancity-away.jpg', third: '/Assets/products/Club Jersey/mancity-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 22, name: 'Liverpool', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/liverpool-home.jpg', away: '/Assets/products/Club Jersey/liverpool-away.jpg', third: '/Assets/products/Club Jersey/liverpool-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 23, name: 'Arsenal', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/arsenal-home.jpg', away: '/Assets/products/Club Jersey/arsenal-away.jpg', third: '/Assets/products/Club Jersey/arsenal-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 24, name: 'Barcelona', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/barca-home.jpg', away: '/Assets/products/Club Jersey/barca-away.jpg', third: '/Assets/products/Club Jersey/barca-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 25, name: 'Real Madrid', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/madrid-home.jpg', away: '/Assets/products/Club Jersey/madrid-away.jpg', third: '/Assets/products/Club Jersey/madrid-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 26, name: 'Atletico Madrid', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/atletico-home.jpg', away: '/Assets/products/Club Jersey/atletico-away.jpg', third: '/Assets/products/Club Jersey/atletico-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 27, name: 'Inter Milan', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/inter-home.jpg', away: '/Assets/products/Club Jersey/inter-away.jpg', third: '/Assets/products/Club Jersey/inter-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 28, name: 'AC Milan', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/acmilan-home.jpg', away: '/Assets/products/Club Jersey/acmilan-away.jpg', third: '/Assets/products/Club Jersey/acmilan-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 29, name: 'Napoli', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/napoli-home.jpg', away: '/Assets/products/Club Jersey/napoli-away.jpg', third: '/Assets/products/Club Jersey/napoli-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 30, name: 'Roma', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/roma-home.jpg', away: '/Assets/products/Club Jersey/roma-away.jpg', third: '/Assets/products/Club Jersey/roma-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 31, name: 'Juventus', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/juventus-home.jpg', away: '/Assets/products/Club Jersey/juventus-away.jpg', third: '/Assets/products/Club Jersey/juventus-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 32, name: 'PSG', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/psg-home.jpg', away: '/Assets/products/Club Jersey/psg-away.jpg', third: '/Assets/products/Club Jersey/psg-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 33, name: 'Bayern Munich', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/bayern-jome.jpg', away: '/Assets/products/Club Jersey/bayern-away.jpg', third: '/Assets/products/Club Jersey/bayern-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 34, name: 'Borussia Dortmund', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/dortmund-home.jpg', away: '/Assets/products/Club Jersey/dortmund-away.jpg', third: '/Assets/products/Club Jersey/dortmund-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 35, name: 'Galatasaray', category: 'Club', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Club Jersey/galatasaray-home.jpg', away: '/Assets/products/Club Jersey/galatasaray-away.jpg', third: '/Assets/products/Club Jersey/galatasaray-third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    country: [
      { id: 36, name: 'Argentina', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/argentina-home.jpg', away: '/Assets/products/Country Jersey/argentina-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 37, name: 'Brazil', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/brazil-home.jpg', away: '/Assets/products/Country Jersey/brazil-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 38, name: 'England', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/england-home.jpg', away: '/Assets/products/Country Jersey/england-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 39, name: 'Italy', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/italy-home.jpg', away: '/Assets/products/Country Jersey/italy-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 40, name: 'Spain', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/spain-home.jpg', away: '/Assets/products/Country Jersey/spain-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 41, name: 'Portugal', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/portugal-home.jpg', away: '/Assets/products/Country Jersey/portugal-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 91, name: 'Nigeria', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/nigeria-home.jpg', away: '/Assets/products/Country Jersey/niheria-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 112, name: 'France', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/france-home.jpg', away: '/Assets/products/Country Jersey/france-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 113, name: 'Germany', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/germany-home.jpg', away: '/Assets/products/Country Jersey/germany-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 114, name: 'Belgium', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/belgium-home.jpg', away: '/Assets/products/Country Jersey/belgium-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 115, name: 'Netherlands', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/netherlands-home.jpg', away: '/Assets/products/Country Jersey/netherlands-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 116, name: 'USA', category: 'Country', price: 17000.00, customizedPrice: 20000.00, playerPrice: 25000.00, playerCustomizedPrice: 28000.00, kits: { home: '/Assets/products/Country Jersey/usa-home.jpg', away: '/Assets/products/Country Jersey/usa-away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] }
    ]
  };

  // ALL category shows all products
  const allProducts = [
    ...products.tracksuits,
    ...products.nfl,
    ...products.socks,
    ...products.teens,
    ...products.retro,
    ...products.special,
    ...products.club,
    ...products.country
  ];

  products.all = allProducts;

  // Filter products based on search query
  const getFilteredProducts = () => {
    if (!searchQuery.trim()) {
      return products[activeCategory] || [];
    }

    const query = searchQuery.toLowerCase();
    const allProds = [
      ...products.tracksuits,
      ...products.nfl,
      ...products.socks,
      ...products.teens,
      ...products.retro,
      ...products.special,
      ...products.club,
      ...products.country
    ];

    return allProds.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  };

  // Get display sections based on active category
  const getDisplaySections = () => {
    if (searchQuery.trim()) {
      return [{ id: 'search', title: 'Search Results', products: getFilteredProducts() }];
    }

    if (activeCategory === 'tracksuits') {
      return [
        { id: 'elite', title: 'Elite Tracksuits', products: products.tracksuits.filter(p => p.version === 'elite' || !p.version) },
        { id: 'classic', title: 'Classic Tracksuits', products: products.tracksuits.filter(p => p.version === 'classic') }
      ];
    }

    if (activeCategory === 'retro') {
      return [{ id: 'retro', title: 'Retro Jerseys', products: products.retro }];
    }

    if (activeCategory === 'club') {
      return [{ id: 'club', title: 'Club Jerseys', products: products.club }];
    }

    if (activeCategory === 'country') {
      return [{ id: 'country', title: 'Country Jerseys', products: products.country }];
    }

    const category = categories.find(cat => cat.id === activeCategory);
    return [{ id: activeCategory, title: category?.title || 'Products', products: products[activeCategory] || [] }];
  };

  const displaySections = getDisplaySections();

  return (
    <section className="product-section">
      <div className="product-section-wrapper">
        {/* Sidebar Categories */}
        <aside className="category-sidebar">
          <div className="sidebar-header">
            <h3>Categories</h3>
          </div>
          <div className="category-list">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-item ${activeCategory === cat.id && !searchQuery ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                  setSearchOpen(false);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="product-main-content">
          {/* Search Bar at Top */}
          <div className="shop-header">
            <div className="search-bar-wrapper">
              <button
                className="search-icon-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                title="Search products"
              >
                <Search size={20} />
              </button>
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Search (e.g., barca, chelsea...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-bar-input"
                  autoFocus
                />
              )}
            </div>
          </div>

          {/* Products Display */}
          <div className="product-section-container">
            {displaySections.map((section) => (
              <div key={section.id} className="category-products">
                <div className="section-header">
                  <div className="header-decoration left"></div>
                  <div className="header-content">
                    <p className="header-subtitle">Shop Collection</p>
                    <h2 className="section-title">{section.title}</h2>
                    <p className="header-description">Premium quality products for every occasion</p>
                  </div>
                  <div className="header-decoration right"></div>
                </div>

                <div className="products-grid">
                  {section.products.length > 0 ? (
                    section.products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    ))
                  ) : (
                    <div className="no-products">No products found</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
