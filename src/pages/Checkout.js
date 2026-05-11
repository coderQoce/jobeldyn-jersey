import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Trash2 } from 'lucide-react';
import './Checkout.css';

// Format price with thousand separators
const formatPrice = (price) => {
  return Math.round(price).toLocaleString('en-US');
};

const Checkout = ({ cartItems, onUpdateQuantity, onRemove }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    address: '',
    postalCode: '',
    deliveryOption: 'ibadan',
    isCustomized: false,
    jerseyName: '',
    jerseyNumber: '',
  });

  const deliveryOptions = {
    ibadan: { name: 'Ibadan', price: 3000, range: '₦2,000 - ₦4,000' },
    lagos: { name: 'Lagos', price: 5000, range: '₦4,000 - ₦6,000' },
    other: { name: 'Other States', price: 8000, range: '₦6,000 - ₦10,000' }
  };

  // Check if cart has any jerseys (for customization eligibility)
  const hasJerseys = cartItems.some(item =>
    !['Tracksuits', 'Socks', 'NFL Jerseys'].includes(item.category)
  );

  // Calculate subtotal with customization fee if applicable
  let subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const CUSTOMIZATION_FEE = 3000; // Fixed ₦3,000 fee
  const customizationFee = (formData.isCustomized && hasJerseys) ? CUSTOMIZATION_FEE : 0;
  const subtotalWithCustomization = subtotal + customizationFee;

  const deliveryCost = deliveryOptions[formData.deliveryOption].price;
  const totalToPay = subtotalWithCustomization + deliveryCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayNow = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state) {
      alert('Please fill in all required fields');
      return;
    }

    let message = 'Hi JOBELDN! I would like to order:\n\n';
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Version: ${item.version}\n`;
      if (item.kit) message += `   Kit: ${item.kit}\n`;
      message += `   Size: ${item.size}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₦${formatPrice(item.price * item.quantity)}\n\n`;
    });
    message += `\n=== ORDER SUMMARY ===\n`;
    message += `Subtotal: ₦${formatPrice(subtotal)}\n`;
    if (formData.isCustomized && hasJerseys) {
      message += `Customization Fee: ₦${formatPrice(customizationFee)}\n`;
    }
    message += `Delivery (${deliveryOptions[formData.deliveryOption].name}): ₦${formatPrice(deliveryCost)}\n`;
    message += `Total: ₦${formatPrice(totalToPay)}\n\n`;
    message += `=== CUSTOMER INFORMATION ===\n`;
    message += `Name: ${formData.firstName} ${formData.lastName}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n\n`;
    message += `=== DELIVERY ADDRESS ===\n`;
    message += `State: ${formData.state}\n`;
    message += `City: ${formData.city}\n`;
    message += `Address: ${formData.address}\n\n`;
    message += `=== DELIVERY OPTION ===\n`;
    message += `${deliveryOptions[formData.deliveryOption].name} (${deliveryOptions[formData.deliveryOption].range})\n\n`;
    if (formData.isCustomized) {
      message += `=== JERSEY CUSTOMIZATION ===\n`;
      message += `Name: ${formData.jerseyName}\n`;
      message += `Number: ${formData.jerseyNumber}\n\n`;
    }
    message += 'Please confirm availability and proceed with payment.';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2347000000000?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ChevronLeft size={20} />
          Back
        </button>
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Cart</span>
          <span>/</span>
          <span className="active">Checkout</span>
        </div>
      </div>

      <div className="checkout-container">
        {/* Left Column - Contact & Delivery Info */}
        <div className="checkout-form">
          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Shipping Information</h3>
            <div className="form-row">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Delivery Option</h3>
            <label className="radio-option">
              <input
                type="radio"
                name="deliveryOption"
                value="ibadan"
                checked={formData.deliveryOption === 'ibadan'}
                onChange={handleInputChange}
              />
              <span>Ibadan - ₦2,000 - ₦4,000</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="deliveryOption"
                value="lagos"
                checked={formData.deliveryOption === 'lagos'}
                onChange={handleInputChange}
              />
              <span>Lagos - ₦4,000 - ₦6,000</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="deliveryOption"
                value="other"
                checked={formData.deliveryOption === 'other'}
                onChange={handleInputChange}
              />
              <span>Other States - ₦6,000 - ₦10,000</span>
            </label>
          </div>

          {hasJerseys && (
            <div className="form-section">
              <h3>Jersey Customization</h3>
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="isCustomized"
                  checked={formData.isCustomized}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    isCustomized: e.target.checked
                  }))}
                />
                <span>Customize Jersey (Add ₦3,000 to total)</span>
              </label>

              {formData.isCustomized && (
                <div className="customization-fields">
                  <div className="form-row">
                    <input
                      type="text"
                      name="jerseyName"
                      placeholder="Name to print on jersey"
                      value={formData.jerseyName}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="jerseyNumber"
                      placeholder="Jersey number"
                      value={formData.jerseyNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column - Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="order-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.version}-${item.size}-${item.kit}`} className="order-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <div className="item-meta">
                      <span>{item.version}</span>
                      {item.kit && <span>{item.kit}</span>}
                      <span>Size {item.size}</span>
                    </div>
                    <p className="item-price">₦{formatPrice(item.price * item.quantity)}</p>
                  </div>
                  <div className="item-controls">
                    <div className="quantity-control">
                      <button onClick={() => onUpdateQuantity(item.id, item.version, item.size, item.kit, item.quantity - 1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.version, item.size, item.kit, item.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => onRemove(item.id, item.version, item.size, item.kit)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <>
              <div className="order-totals">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>₦{formatPrice(subtotal)}</span>
                </div>
                {formData.isCustomized && (
                  <div className="total-row">
                    <span>Customization Fee (20%)</span>
                    <span>₦{formatPrice(customizationFee)}</span>
                  </div>
                )}
                <div className="total-row">
                  <span>Delivery cost</span>
                  <span>₦{formatPrice(deliveryCost)}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total to pay</span>
                  <span>₦{formatPrice(totalToPay)}</span>
                </div>
              </div>

              <button className="btn-pay-now" onClick={handlePayNow}>
                Send to WhatsApp
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
