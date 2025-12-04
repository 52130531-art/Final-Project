import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

function NeedyRequests() {

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
      
      <section className="needy-section">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">

              {/* Title */}
              <div className="needy-header text-center">
                <h1>Create Help Request</h1>
                <p>Please provide accurate details about your situation.</p>
              </div>

              {/* Main Form */}
              <div className="needy-form-wrapper">
                <h2>Personal Details</h2>

                <form onSubmit={handleSubmit}>

                  <div className="row g-4">

                    <div className="col-md-6">
                      <label>First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Email</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="col-12">
                      <label>Message</label>
                      <textarea 
                        name="message"
                        className="form-control"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>

                  </div>

                </form>
              </div>

              {/* Proof Button */}
              <div className="text-center mt-5">
                <h3>Enter your proof here:</h3>

                <button 
                  className="btn btn-success"
                  onClick={() => navigate("/proof-upload")}
                >
                  Get Started
                </button>
              </div>

            </div>
          </div>
        </div>

      </section>

      <Footer />

    </div>
  );
}

export default NeedyRequests;
