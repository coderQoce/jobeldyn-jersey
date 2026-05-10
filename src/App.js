import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import NewArrivals from './pages/NewArrivals';
import './styles/App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id && item.version === product.version && item.size === product.size);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && item.version === product.version && item.size === product.size
          ? { ...item, quantity: item.quantity + (product.quantity || 1) }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const removeFromCart = (id, version, size, kit) => {
    setCartItems(cartItems.filter(item => !(item.id === id && item.version === version && item.size === size && item.kit === kit)));
  };

  const updateQuantity = (id, version, size, kit, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, version, size, kit);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id && item.version === version && item.size === size && item.kit === kit
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="app-container">
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onClearCart={clearCart}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} cartCount={cartItems.length} onCartClick={() => setCartOpen(true)} />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
          </Routes>
        </main>
        <Footer />

        {/* Fixed Cart Icon */}
        <button className="fixed-cart-btn" onClick={() => setCartOpen(true)}>
          <ShoppingCart size={22} />
          {cartItems.length > 0 && <span className="fixed-cart-badge">{cartItems.length}</span>}
        </button>
      </div>
    </Router>
  );
}

export default App;
