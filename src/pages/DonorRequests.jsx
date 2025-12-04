import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DonorRequests() {
  const navigate = useNavigate();

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
    alert('Thank you! We will contact you soon.');

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

      {/* Main Section */}
      <section className="donor-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Page Title */}
              <div className="text-center mb-5">
                <h1 className="donor-title">Help change a life today</h1>
                <p className="donor-subtitle">
                  Support individuals and families in need with food, clothes, money, or medical help.
                </p>
              </div>

              {/* Form */}
              <div className="donor-form-wrapper">
                <h2 className="donor-form-title">Personal details</h2>

                <form onSubmit={handleSubmit} className="donor-form">
                  <div className="row g-4">

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control-donor"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control-donor"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control-donor"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control-donor"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control-donor donor-textarea"
                        name="message"
                        rows="5"
                        placeholder="How would you like to support?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-end">
                      <button className="btn btn-donor-submit" type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Donate Section */}
              <div className="donor-donate-section mt-5">
                <div className="row align-items-center">
                  <div className="col-md-4">
                  </div>

                  <div className="col-md-8">
                    <h3 className="donor-donate-title">Donate</h3>

                    <button
                      className="btn btn-donor-get-started"
                      onClick={() => navigate('/donate')}
                    >
                      Get Started
                    </button>
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


