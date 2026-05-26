import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Headphones, RotateCcw, Lock } from 'lucide-react';
import './NewArrivals.css';

const NewArrivals = () => {
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    navigate(`/product/${productId}`);
  };

  const products = [
    {
      id: 1,
      name: 'T-Shirt Short',
      price: 890.98,
      image: 'https://via.placeholder.com/250x300?text=T-Shirt+Short',
      category: 'Shirts'
    },
    {
      id: 2,
      name: 'Short-Sleeved Shirts',
      price: 912.98,
      image: 'https://via.placeholder.com/250x300?text=Short-Sleeved+Shirts',
      category: 'Shirts'
    },
    {
      id: 3,
      name: 'Sleeved Shirts with Inner',
      price: 629.98,
      image: 'https://via.placeholder.com/250x300?text=Sleeved+Shirts',
      category: 'Shirts'
    },
    {
      id: 4,
      name: 'Classic Jersey',
      price: 20000.00,
      customizedPrice: 23000.00,
      image: 'https://via.placeholder.com/250x300?text=Classic+Jersey',
      category: 'Jerseys'
    },
    {
      id: 5,
      name: 'Premium Tracksuit',
      price: 1200.00,
      image: 'https://via.placeholder.com/250x300?text=Premium+Tracksuit',
      category: 'Tracksuits'
    },
    {
      id: 6,
      name: 'Retro Football Jersey',
      price: 27000.00,
      customizedPrice: 30000.00,
      image: 'https://via.placeholder.com/250x300?text=Retro+Jersey',
      category: 'Retro'
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.'
    },
    {
      icon: Lock,
      title: 'Secure Checkout',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.'
    }
  ];

  return (
    <div className="new-arrivals-page">
      <div className="new-arrivals-container">
        <h1 className="page-title">Latest Products</h1>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                {product.customizedPrice ? (
                  <div className="product-prices">
                    <div className="price-item">
                      <span className="price-label">Plain</span>
                      <p className="product-price">₦{Math.round(product.price).toLocaleString('en-US')}</p>
                    </div>
                    <div className="price-item">
                      <span className="price-label">Customized</span>
                      <p className="product-price">₦{Math.round(product.customizedPrice).toLocaleString('en-US')}</p>
                    </div>
                  </div>
                ) : (
                  <p className="product-price">$ {product.price.toFixed(2)} USD</p>
                )}
                <button className="add-to-cart-link" onClick={() => handleAddToCart(product.id)}>Add to Cart <span>›</span></button>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
