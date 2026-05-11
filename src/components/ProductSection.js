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
      { id: 1, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c1.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 2, name: 'Classic Tracksuit', category: 'Tracksuits', price: 25000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'classic', image: '/Assets/products/Tracksuit/ClassicVersion/c2.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
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
      { id: 72, name: 'Elite Tracksuit', category: 'Tracksuits', price: 65000.00, classicPrice: 25000.00, elitePrice: 65000.00, version: 'elite', image: '/Assets/products/Tracksuit/EliteVersion/e17.jpg', playerImage: '/Assets/products/Tracksuit/EliteVersion/e17.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    nfl: [
      { id: 4, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n1.jpg', playerImage: '/Assets/products/NFL/n1.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 5, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n2.jpg', playerImage: '/Assets/products/NFL/n2.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 6, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n3.jpg', playerImage: '/Assets/products/NFL/n3.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 7, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n4.jpg', playerImage: '/Assets/products/NFL/n4.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 8, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n5.jpg', playerImage: '/Assets/products/NFL/n5.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 52, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n6.jpg', playerImage: '/Assets/products/NFL/n6.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 53, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n7.jpg', playerImage: '/Assets/products/NFL/n7.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 54, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n8.jpg', playerImage: '/Assets/products/NFL/n8.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 55, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n9.jpg', playerImage: '/Assets/products/NFL/n9.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 56, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n10.jpg', playerImage: '/Assets/products/NFL/n10.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 57, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n11.jpg', playerImage: '/Assets/products/NFL/n11.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 58, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n12.jpg', playerImage: '/Assets/products/NFL/n12.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 59, name: 'NFL Jersey', category: 'NFL Jerseys', price: 18000, playerPrice: 18000, image: '/Assets/products/NFL/n13.jpg', playerImage: '/Assets/products/NFL/n13.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
    ],
    socks: [
      { id: 60, name: 'NBA Socks', category: 'Socks', price: 5000, playerPrice: 5000, image: '/Assets/products/Socks/Nba.jpg', playerImage: '/Assets/products/Socks/Nba.jpg', sizes: ['One Size'] },
      { id: 61, name: 'Adidas & Nike Socks', category: 'Socks', price: 6000, playerPrice: 6000, image: '/Assets/products/Socks/adidas and nike collection.jpg', playerImage: '/Assets/products/Socks/adidas and nike collection.jpg', sizes: ['One Size'] }
    ],
    teens: [
      { id: 13, name: 'Arsenal Teen Jersey', category: 'Teens', price: 12000.00, customizedPrice: 15000.00, image: '/Assets/products/Teen/arsenal-teen.jpg', playerImage: '/Assets/products/Teen/arsenal-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 14, name: 'Manchester United Teen Jersey', category: 'Teens', price: 12000.00, customizedPrice: 15000.00, image: '/Assets/products/Teen/manchester-unitted-teen.jpg', playerImage: '/Assets/products/Teen/manchester-unitted-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 15, name: 'Inter Miami Teen Jersey', category: 'Teens', price: 12000.00, customizedPrice: 15000.00, image: '/Assets/products/Teen/inter-miami-teen.jpg', playerImage: '/Assets/products/Teen/inter-miami-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 85, name: 'Nigeria Teen Jersey', category: 'Teens', price: 12000.00, customizedPrice: 15000.00, image: '/Assets/products/Teen/nigeria-teen.jpg', playerImage: '/Assets/products/Teen/nigeria-teen.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    retro: [
      { id: 10, name: 'Manchester United Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/Manchester-United.jpg', playerImage: '/Assets/products/Retro Jersey/Manchester-United.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 11, name: 'Arsenal Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/arsenal.jpg', playerImage: '/Assets/products/Retro Jersey/arsenal.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 12, name: 'Liverpool Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/liverpool.jpg', playerImage: '/Assets/products/Retro Jersey/liverpool.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 73, name: 'Chelsea Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/chelsea.jpg', playerImage: '/Assets/products/Retro Jersey/chelsea.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 74, name: 'AC Milan Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/ac-milan.jpg', playerImage: '/Assets/products/Retro Jersey/ac-milan.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 75, name: 'Real Madrid Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/madrid.jpg', playerImage: '/Assets/products/Retro Jersey/madrid.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 76, name: 'Everton Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/everton.jpg', playerImage: '/Assets/products/Retro Jersey/everton.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 77, name: 'Spurs Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/Spurs.jpg', playerImage: '/Assets/products/Retro Jersey/Spurs.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 78, name: 'Argentina Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/argentina.jpg', playerImage: '/Assets/products/Retro Jersey/argentina.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 79, name: 'Argentina Retro Jersey 2', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/argentina2.jpg', playerImage: '/Assets/products/Retro Jersey/argentina2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 80, name: 'Brazil Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/brazil.jpg', playerImage: '/Assets/products/Retro Jersey/brazil.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 81, name: 'England Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/england.jpg', playerImage: '/Assets/products/Retro Jersey/england.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 82, name: 'Nigeria Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/migeria.jpg', playerImage: '/Assets/products/Retro Jersey/migeria.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 83, name: 'Manchester United Retro Jersey 2', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/manchester-united2.jpg', playerImage: '/Assets/products/Retro Jersey/manchester-united2.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 84, name: 'Barcelona Retro Jersey', category: 'Retro Jerseys', price: 25000.00, customizedPrice: 28000.00, image: '/Assets/products/Retro Jersey/barcelona.jpg', playerImage: '/Assets/products/Retro Jersey/barcelona.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    special: [
      { id: 16, name: 'Barcelona Special Edition Jersey', category: 'Special', price: 2500.00, playerPrice: 3000.00, image: '/Assets/products/Special Edition Jersey/s1.jpg', playerImage: '/Assets/products/Special Edition Jersey/s1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 17, name: 'Barcelona Special Edition Jersey', category: 'Special', price: 2800.00, playerPrice: 3300.00, image: '/Assets/products/Special Edition Jersey/s1.jpg', playerImage: '/Assets/products/Special Edition Jersey/s1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 18, name: 'Barcelona Special Edition Jersey', category: 'Special', price: 3000.00, playerPrice: 3500.00, image: '/Assets/products/Special Edition Jersey/s1.jpg', playerImage: '/Assets/products/Special Edition Jersey/s1.jpg', sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    club: [
      { id: 19, name: 'Chelsea', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Chelsea/home.jpg', away: '/Assets/products/Club Jersey/Chelsea/away.jpg', third: '/Assets/products/Club Jersey/Chelsea/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 20, name: 'Manchester United', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/ManUtd/home.jpg', away: '/Assets/products/Club Jersey/ManUtd/away.jpg', third: '/Assets/products/Club Jersey/ManUtd/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 21, name: 'Manchester City', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/ManCity/home.jpg', away: '/Assets/products/Club Jersey/ManCity/away.jpg', third: '/Assets/products/Club Jersey/ManCity/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 22, name: 'Liverpool', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Liverpool/home.jpg', away: '/Assets/products/Club Jersey/Liverpool/away.jpg', third: '/Assets/products/Club Jersey/Liverpool/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 23, name: 'Arsenal', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Arsenal/home.jpg', away: '/Assets/products/Club Jersey/Arsenal/away.jpg', third: '/Assets/products/Club Jersey/Arsenal/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 24, name: 'Barcelona', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Barcelona/home.jpg', away: '/Assets/products/Club Jersey/Barcelona/away.jpg', third: '/Assets/products/Club Jersey/Barcelona/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 25, name: 'Real Madrid', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/RealMadrid/home.jpg', away: '/Assets/products/Club Jersey/RealMadrid/away.jpg', third: '/Assets/products/Club Jersey/RealMadrid/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 26, name: 'Atletico Madrid', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/AtleticoMadrid/home.jpg', away: '/Assets/products/Club Jersey/AtleticoMadrid/away.jpg', third: '/Assets/products/Club Jersey/AtleticoMadrid/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 27, name: 'Inter Milan', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/InterMilan/home.jpg', away: '/Assets/products/Club Jersey/InterMilan/away.jpg', third: '/Assets/products/Club Jersey/InterMilan/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 28, name: 'AC Milan', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/ACMilan/home.jpg', away: '/Assets/products/Club Jersey/ACMilan/away.jpg', third: '/Assets/products/Club Jersey/ACMilan/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 29, name: 'Napoli', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Napoli/home.jpg', away: '/Assets/products/Club Jersey/Napoli/away.jpg', third: '/Assets/products/Club Jersey/Napoli/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 30, name: 'Roma', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Roma/home.jpg', away: '/Assets/products/Club Jersey/Roma/away.jpg', third: '/Assets/products/Club Jersey/Roma/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 31, name: 'Juventus', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Juventus/home.jpg', away: '/Assets/products/Club Jersey/Juventus/away.jpg', third: '/Assets/products/Club Jersey/Juventus/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 32, name: 'PSG', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/PSG/home.jpg', away: '/Assets/products/Club Jersey/PSG/away.jpg', third: '/Assets/products/Club Jersey/PSG/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 33, name: 'Bayern Munich', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/BayernMunich/home.jpg', away: '/Assets/products/Club Jersey/BayernMunich/away.jpg', third: '/Assets/products/Club Jersey/BayernMunich/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 34, name: 'Borussia Dortmund', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Dortmund/home.jpg', away: '/Assets/products/Club Jersey/Dortmund/away.jpg', third: '/Assets/products/Club Jersey/Dortmund/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 35, name: 'Galatasaray', category: 'Club', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Club Jersey/Galatasaray/home.jpg', away: '/Assets/products/Club Jersey/Galatasaray/away.jpg', third: '/Assets/products/Club Jersey/Galatasaray/third.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] }
    ],
    country: [
      { id: 36, name: 'Nigeria', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Nigeria/home.jpg', away: '/Assets/products/Country Jersey/Nigeria/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 37, name: 'France', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/France/home.jpg', away: '/Assets/products/Country Jersey/France/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 38, name: 'Spain', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Spain/home.jpg', away: '/Assets/products/Country Jersey/Spain/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 39, name: 'Brazil', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Brazil/home.jpg', away: '/Assets/products/Country Jersey/Brazil/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 40, name: 'Portugal', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Portugal/home.jpg', away: '/Assets/products/Country Jersey/Portugal/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 41, name: 'Ghana', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Ghana/home.jpg', away: '/Assets/products/Country Jersey/Ghana/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 42, name: 'Morocco', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Morocco/home.jpg', away: '/Assets/products/Country Jersey/Morocco/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 43, name: 'Senegal', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Senegal/home.jpg', away: '/Assets/products/Country Jersey/Senegal/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 44, name: 'Germany', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Germany/home.jpg', away: '/Assets/products/Country Jersey/Germany/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 45, name: 'England', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/England/home.jpg', away: '/Assets/products/Country Jersey/England/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 46, name: 'Argentina', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Argentina/home.jpg', away: '/Assets/products/Country Jersey/Argentina/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 47, name: 'Netherlands', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/Netherlands/home.jpg', away: '/Assets/products/Country Jersey/Netherlands/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] },
      { id: 48, name: 'United States of America', category: 'Country', price: 17000.00, playerPrice: 25000.00, kits: { home: '/Assets/products/Country Jersey/USA/home.jpg', away: '/Assets/products/Country Jersey/USA/away.jpg' }, sizes: ['M', 'L', 'XL', 'XXL'] }
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
        { id: 'classic', title: 'Classic Tracksuits', products: products.tracksuits.filter(p => p.version === 'classic') },
        { id: 'elite', title: 'Elite Tracksuits', products: products.tracksuits.filter(p => p.version === 'elite' || !p.version) }
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
