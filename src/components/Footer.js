import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <footer className="main-footer" id="contact-section">
      <div className="footer-column footer-info-section">
        <h2>Contact Us</h2>
        <p>For any inquiries regarding events and activities, please feel free to contact us.</p>
        <address>
          <p><i className="fas fa-map-marker-alt"></i> Thakur Village, Kandivali East, Mumbai - 400101</p>
          <p><i className="fas fa-envelope"></i> acmsigai10@gmail.com</p>
          <p><i className="fas fa-phone"></i> 022-28461891</p>
        </address>
        <div className="social-links">
          <a href="https://share.google/EoemLX4OrleF3GYDw" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/tcet_acm.sigai?igsh=YXQ2Zml1ZjRucm81" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <div className="footer-column footer-map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.745839106567!2d72.8720306749808!3d19.206300282025317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1760194532966!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="TCET Location Map"
        ></iframe>
      </div>

      <div className="footer-column footer-contact-form">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone" 
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleInputChange}
            required 
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
