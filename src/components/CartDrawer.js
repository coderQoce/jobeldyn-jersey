import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onClearCart }) => {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Cart</h2>
          <span className="cart-count">{items.length} items</span>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-items-container">
          {items.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p className="text-muted">Add items to get started</p>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <div key={`${item.id}-${item.version}-${item.size}-${item.kit}`} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <div className="cart-item-meta">
                      <span className="meta-tag">{item.version}</span>
                      {item.kit && <span className="meta-tag">{item.kit}</span>}
                      <span className="meta-tag">Size {item.size}</span>
                    </div>
                    <p className="cart-item-price">$ {(item.price * item.quantity).toFixed(2)} USD</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-control">
                      <button onClick={() => onUpdateQuantity(item.id, item.version, item.size, item.quantity - 1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.version, item.size, item.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => onRemove(item.id, item.version, item.size)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="total-amount">$ {total.toFixed(2)} USD</span>
            </div>
            <button className="btn-checkout" onClick={() => {
              onClose();
              navigate('/checkout');
            }}>
              Proceed to Checkout
            </button>
            <button className="btn-clear-cart" onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
