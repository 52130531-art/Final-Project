import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        // Show success message
        alert(data.message || 'Thank you for your message! We will get back to you soon.');
      } else {
        setError(data.error || 'Failed to send your message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.');
      console.error('Contact form error:', err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="app-container">
      <div className="page-top-border"></div>
      <Header />
      
      {/* Contact Section */}
      <section className="contact-section">
        {/* Decorative Background Elements */}
        <div className="contact-decoration-left"></div>
        <div className="contact-decoration-right-top"></div>
        <div className="contact-decoration-right-bottom"></div>
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="contact-header text-center">
                <h1 className="contact-title">Contact Us Today</h1>
                <p className="contact-subtitle">
                  Discover how our solutions can help you achieve your goals.
                </p>
              </div>

              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* First Name */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder="Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control contact-input"
                        placeholder="Email address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control contact-input"
                        placeholder="Phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <textarea
                        className="form-control contact-textarea"
                        placeholder="Message*"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="col-12">
                        <div className="alert alert-danger" role="alert" style={{ marginTop: '10px' }}>
                          {error}
                        </div>
                      </div>
                    )}

                    {/* Success Message */}
                    {success && (
                      <div className="col-12">
                        <div className="alert alert-success" role="alert" style={{ marginTop: '10px' }}>
                          Thank you for your message! We will get back to you soon.
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="col-12 text-center">
                      <button 
                        type="submit" 
                        className="btn btn-contact-submit"
                        disabled={processing}
                      >
                        {processing ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </div>
                </form>
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

export default Contact;

