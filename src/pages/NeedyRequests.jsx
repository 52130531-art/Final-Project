import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NeedyRequests() {
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
    alert('Thank you for submitting your request. We will review it and get back to you soon.');
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
      
      {/* Needy Requests Section */}
      <section className="needy-section">
        {/* Decorative Background Elements */}
        <div className="needy-decoration-left"></div>
        <div className="needy-decoration-right"></div>
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              {/* Header Section */}
              <div className="needy-header text-center">
                <h1 className="needy-title">Create Help Request</h1>
                <p className="needy-subtitle">
                  Please provide accurate details about your situation. this information will help donors understand your needs.
                </p>
              </div>

              {/* Form Section */}
              <div className="needy-form-wrapper">
                <h2 className="needy-form-title">Person Details</h2>
                <form className="needy-form" onSubmit={handleSubmit}>
                  <div className="row g-4">
                    {/* First Name */}
                    <div className="col-md-6">
                      <div className="form-group-needy">
                        <input
                          type="text"
                          className="form-control-needy"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-needy ${formData.firstName ? 'active' : ''}`}>First name</label>
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                      <div className="form-group-needy">
                        <input
                          type="text"
                          className="form-control-needy"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-needy ${formData.lastName ? 'active' : ''}`}>Last name</label>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="form-group-needy">
                        <input
                          type="email"
                          className="form-control-needy"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-needy ${formData.email ? 'active' : ''}`}>Email address</label>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <div className="form-group-needy">
                        <input
                          type="tel"
                          className="form-control-needy"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        <label className={`form-label-needy ${formData.phone ? 'active' : ''}`}>Phone number</label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <div className="form-group-needy">
                        <textarea
                          className="form-control-needy needy-textarea"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label className={`form-label-needy ${formData.message ? 'active' : ''}`}>Message</label>
                      </div>
                    </div>

                    {/* Send Button */}
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-needy-submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Proof Section */}
              <div className="needy-proof-section text-center">
                <h3 className="needy-proof-title">Enter your proof there:</h3>
                <button type="button" className="btn btn-needy-proof">
                  Get Started
                </button>
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

export default NeedyRequests;

