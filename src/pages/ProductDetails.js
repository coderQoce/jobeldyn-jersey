import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [selectedVersion, setSelectedVersion] = useState('Fan');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Sample product data
  const product = {
    id: parseInt(id) || 1,
    name: 'Premium Jersey Collection',
    category: 'Jerseys',
    price: 35000,
    playerPrice: 45000,
    description: 'High-quality authentic jersey with premium stitching and materials.',
    material: '100% Polyester',
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      'https://via.placeholder.com/500x600?text=Product+Front',
      'https://via.placeholder.com/500x600?text=Product+Back',
      'https://via.placeholder.com/500x600?text=Product+Detail+1',
      'https://via.placeholder.com/500x600?text=Product+Detail+2',
    ],
    playerImages: [
      'https://via.placeholder.com/500x600?text=Player+Front',
      'https://via.placeholder.com/500x600?text=Player+Back',
      'https://via.placeholder.com/500x600?text=Player+Detail+1',
      'https://via.placeholder.com/500x600?text=Player+Detail+2',
    ],
  };

  const currentPrice = selectedVersion === 'Fan' ? product.price : product.playerPrice;
  const currentImages = selectedVersion === 'Fan' ? product.images : product.playerImages;

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      size: selectedSize,
      version: selectedVersion,
      price: currentPrice,
      quantity,
      image: currentImages[0],
    });
    setQuantity(1);
  };

  const nextImage = () => {
    setMainImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setMainImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Left: Image Gallery */}
        <div className="image-gallery">
          <div className="main-image-container">
            <img
              src={currentImages[mainImageIndex]}
              alt={product.name}
              className="main-image"
            />
            <button className="gallery-nav prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="thumbnails">
            {currentImages.map((img, idx) => (
              <button
                key={idx}
                className={`thumbnail ${idx === mainImageIndex ? 'active' : ''}`}
                onClick={() => setMainImageIndex(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="product-details-info">
          <h1 className="product-title font-bebas">{product.name}</h1>
          <p className="product-category">{product.category}</p>

          {/* Version Toggle */}
          <div className="version-toggle-large">
            <button
              className={`version-toggle-btn ${selectedVersion === 'Fan' ? 'active' : ''}`}
              onClick={() => setSelectedVersion('Fan')}
            >
              Fan Version
            </button>
            <button
              className={`version-toggle-btn ${selectedVersion === 'Player' ? 'active' : ''}`}
              onClick={() => setSelectedVersion('Player')}
            >
              Player Version
            </button>
          </div>

          <p className="product-price">₦{currentPrice.toLocaleString()}</p>
          <p className="product-description">{product.description}</p>

          {/* Material Info */}
          <div className="material-info">
            <h4>Material</h4>
            <p>{product.material}</p>
          </div>

          {/* Size Selector */}
          <div className="size-selector-large">
            <label>Select Size:</label>
            <div className="size-options-large">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-selector-large">
            <label>Quantity:</label>
            <div className="quantity-control-large">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn-add-to-cart-large" onClick={handleAddToCart}>
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="btn-wishlist-large">
              <Heart size={20} />
            </button>
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            <div className="info-item">
              <h5>Free Shipping</h5>
              <p>On orders over ₦50,000</p>
            </div>
            <div className="info-item">
              <h5>Easy Returns</h5>
              <p>30-day return policy</p>
            </div>
            <div className="info-item">
              <h5>Authentic</h5>
              <p>100% genuine products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
