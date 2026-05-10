import React from 'react';
import { Truck, Lock, RotateCcw, Headphones } from 'lucide-react';
import './BusinessProperties.css';

const BusinessProperties = () => {
  const properties = [
    {
      icon: Truck,
      title: 'Worldwide Shipping',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.',
      link: 'Shipping Details'
    },
    {
      icon: Lock,
      title: 'Secure Payment',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.',
      link: 'How We Protect Your Data'
    },
    {
      icon: RotateCcw,
      title: '30-Days Free Returns',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.',
      link: 'Return Policy'
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Step into the realm of style with our unbeatable t-shirt trendsetter of today.',
      link: '24/7 Customer Support'
    }
  ];

  return (
    <section className="business-properties">
      <div className="properties-container">
        <div className="properties-grid">
          {properties.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <div key={index} className="property-item">
                <div className="property-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="property-title">{prop.title}</h3>
                <p className="property-description">{prop.description}</p>
                <button className="property-link">{prop.link}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessProperties;
