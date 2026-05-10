import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  // Determine version labels and kit options based on category
  const getVersionLabels = () => {
    if (product.category === 'Tracksuits') {
      return { hasVersions: false };
    }
    if (['Retro', 'Special'].includes(product.category)) {
      return { v1: 'Fan', v2: 'Player', hasVersions: true };
    }
    if (product.category === 'Club') {
      return { hasKits: true, kits: ['Home', 'Away', 'Third'], hasVersions: true, v1: 'Fan', v2: 'Player' };
    }
    if (product.category === 'Country') {
      return { hasKits: true, kits: ['Home', 'Away'], hasVersions: true, v1: 'Fan', v2: 'Player' };
    }
    return { v1: 'Fan', v2: 'Player', hasVersions: false };
  };

  const versionLabels = getVersionLabels();
  const [selectedVersion, setSelectedVersion] = useState(versionLabels.v1 || 'Fan');
  const [selectedKit, setSelectedKit] = useState(versionLabels.kits ? versionLabels.kits[0] : null);
  const [selectedSize, setSelectedSize] = useState('M');

  // Get current price based on version and category
  const getCurrentPrice = () => {
    if (product.category === 'Tracksuits') {
      return selectedVersion === 'Classic' ? product.classicPrice : product.elitePrice;
    }
    return selectedVersion === 'Fan' ? product.price : product.playerPrice;
  };

  const currentPrice = getCurrentPrice();

  // Get current image based on version, kit, and category
  const getCurrentImage = () => {
    if (product.category === 'Tracksuits') {
      return selectedVersion === 'Classic' ? product.image : product.playerImage;
    }
    if (['Retro', 'Special'].includes(product.category)) {
      return selectedVersion === 'Fan' ? product.image : product.playerImage;
    }
    if (product.category === 'Club' || product.category === 'Country') {
      if (product.kits && selectedKit) {
        const kitKey = selectedKit.toLowerCase();
        return product.kits[kitKey] || product.image;
      }
      return selectedVersion === 'Fan' ? product.image : product.playerImage;
    }
    return product.image;
  };

  const currentImage = getCurrentImage();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...product,
        size: selectedSize,
        version: selectedVersion,
        kit: selectedKit,
        price: currentPrice,
        quantity: 1,
        image: currentImage,
      });
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={currentImage}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        {/* Kit Toggle - For Club and Country jerseys */}
        {versionLabels.hasKits && (
          <div className="kit-toggle">
            {versionLabels.kits.map((kit) => (
              <button
                key={kit}
                className={`kit-link ${selectedKit === kit ? 'active' : ''}`}
                onClick={() => setSelectedKit(kit)}
              >
                {kit}
              </button>
            ))}
          </div>
        )}

        {/* Version Toggle - Only show if product has versions */}
        {versionLabels.hasVersions && (
          <div className="version-toggle">
            <button
              className={`version-link ${selectedVersion === versionLabels.v1 ? 'active' : ''}`}
              onClick={() => setSelectedVersion(versionLabels.v1)}
            >
              {versionLabels.v1}
            </button>
            <span className="version-separator">|</span>
            <button
              className={`version-link ${selectedVersion === versionLabels.v2 ? 'active' : ''}`}
              onClick={() => setSelectedVersion(versionLabels.v2)}
            >
              {versionLabels.v2}
            </button>
          </div>
        )}

        <p className="product-price">$ {currentPrice.toFixed(2)} USD</p>

        {/* Size Selector */}
        <div className="size-selector">
          {['M', 'L', 'XL', 'XXL'].map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart <span className="cart-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
