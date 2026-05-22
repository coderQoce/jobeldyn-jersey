import React, { useState } from 'react';
import './RequestJersey.css';

const RequestJersey = () => {
  const [formData, setFormData] = useState({
    jerseyName: '',
    type: '',
    version: '',
    size: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `Hi JOBELDN! I would like to request a jersey:\n\n`;
    message += `Jersey Name: ${formData.jerseyName}\n`;
    message += `Type: ${formData.type}\n`;
    message += `Version: ${formData.version}\n`;
    message += `Size: ${formData.size}\n\n`;
    message += 'Please check availability and let me know.';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348125051801?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      jerseyName: '',
      type: '',
      version: '',
      size: ''
    });
  };

  return (
    <section className="request-jersey-section">
      <div className="request-wrapper">
        <div className="request-form-container">
          <form className="request-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="jerseyName">Jersey Name</label>
              <input
                type="text"
                id="jerseyName"
                name="jerseyName"
                value={formData.jerseyName}
                onChange={handleChange}
                placeholder="Enter jersey name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Jersey Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select a type</option>
                <option value="Tracksuit">Tracksuit</option>
                <option value="NFL Jersey">NFL Jersey</option>
                <option value="Socks">Socks</option>
                <option value="Teen Jersey">Teen Jersey</option>
                <option value="Retro Jersey">Retro Jersey</option>
                <option value="Special Edition">Special Edition</option>
                <option value="Club Jersey">Club Jersey</option>
                <option value="Country Jersey">Country Jersey</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="version">Version</label>
              <select
                id="version"
                name="version"
                value={formData.version}
                onChange={handleChange}
                required
              >
                <option value="">Select a version</option>
                <option value="Classic">Classic</option>
                <option value="Elite">Elite</option>
                <option value="Fan">Fan</option>
                <option value="Player">Player</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="size">Size</label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
              >
                <option value="">Select a size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Submit Request</button>
          </form>
        </div>

        <div className="request-content">
          <h2 className="request-title">Request A Particular Jersey</h2>
          <p className="request-subtitle">Can't find what you're looking for? Let us know and we'll make it happen for you.</p>
        </div>
      </div>
    </section>
  );
};

export default RequestJersey;
