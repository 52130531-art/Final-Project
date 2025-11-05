import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DonorRequests() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your donation request! We will connect you with those in need soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="app-container">
      <div className="page-top-border"></div>
      <Header />
      
      {/* Donor Requests Section */}
      <section className="donor-section">
        {/* Decorative Background Elements */}
        <div className="donor-decoration-left"></div>
        <div className="donor-decoration-right-top"></div>
        <div className="donor-decoration-right-bottom"></div>
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              {/* Header Section */}
              <div className="donor-header text-center">
                <h1 className="donor-title">Help change a life today</h1>
                <p className="donor-subtitle">
                  Browse our selection from families and individuals in need. Your kindness can bring relief, hope, and dignity.
                </p>
              </div>

              {/* Form Section */}
              <div className="donor-form-wrapper">
                <h2 className="donor-form-title">Personal details</h2>
                <p className="donor-form-hint">— e.g., food, clothes, money, medical support, etc.</p>
                <form className="donor-form" onSubmit={handleSubmit}>
                  <div className="row g-4">
                    {/* First Name */}
                    <div className="col-md-6">
                      <div className="form-group-donor">
                        <input
                          type="text"
                          className="form-control-donor"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-donor ${formData.firstName ? 'active' : ''}`}>
                          <span className="label-text">First name</span>
                        </label>
                        <div className="input-highlight"></div>
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                      <div className="form-group-donor">
                        <input
                          type="text"
                          className="form-control-donor"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-donor ${formData.lastName ? 'active' : ''}`}>
                          <span className="label-text">Last name</span>
                        </label>
                        <div className="input-highlight"></div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="form-group-donor">
                        <input
                          type="email"
                          className="form-control-donor"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-donor ${formData.email ? 'active' : ''}`}>
                          <span className="label-text">Email address</span>
                        </label>
                        <div className="input-highlight"></div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <div className="form-group-donor">
                        <input
                          type="tel"
                          className="form-control-donor"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-donor ${formData.phone ? 'active' : ''}`}>
                          <span className="label-text">Phone number</span>
                        </label>
                        <div className="input-highlight"></div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <div className="form-group-donor">
                        <textarea
                          className="form-control-donor donor-textarea"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label className={`form-label-donor ${formData.message ? 'active' : ''}`}>
                          <span className="label-text">Message</span>
                        </label>
                        <div className="input-highlight"></div>
                      </div>
                    </div>

                    {/* Send Button */}
                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-donor-submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Donate Section */}
              <div className="donor-donate-section">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="donor-donate-image-wrapper">
                      <img 
                        src="/images/donation-hands.jpg" 
                        alt="Hand giving donation" 
                        className="donor-donate-image"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=600&fit=crop';
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="donor-donate-content">
                      <h3 className="donor-donate-title">Donate</h3>
                      <button type="button" className="btn btn-donor-get-started">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Side borders */}
      <div className="side-border left-border"></div>
      <div className="side-border right-border"></div>
    </div>
  );
}

export default DonorRequests;

