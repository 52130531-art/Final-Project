import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

function NeedyRequests() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    description: '',
    pdf: ''
  });
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file only.');
        e.target.value = ''; // Clear the input
        return;
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        setError('File size must be less than 10MB.');
        e.target.value = ''; // Clear the input
        return;
      }

      setFileName(file.name);
      setError(null);

      // Convert file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1]; // Remove data:application/pdf;base64, prefix
        setFormData({ ...formData, pdf: base64String });
      };
      reader.onerror = () => {
        setError('Error reading file. Please try again.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);

    try {
      // TODO: Replace with actual needy requests API endpoint when available
      const response = await fetch('http://localhost:5000/api/needy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for submitting your request. We will review it and get back to you soon.');
        setFormData({
          name: '',
          location: '',
          email: '',
          phone: 0,
          description: '',
          pdf: ''
        });
        setFileName('');
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } else {
        setError('Failed to submit your request. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred submitting your request.');
    } finally {
      setProcessing(false);
    }
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
                <h1 className="donor-title">Create Help Request</h1>
                <p className="donor-subtitle">
                  Please provide accurate details about your situation.
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
                        name="name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control-donor"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control-donor"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
           
                    <div className="col-12">
                      <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>
                        Upload Proof Document (PDF)
                      </label>
                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        className="form-control-donor"
                        name="pdf"
                        onChange={handleFileChange}
                        required
                      />
                      {fileName && (
                        <small className="text-muted" style={{ display: 'block', marginTop: '4px' }}>
                          Selected: {fileName}
                        </small>
                      )}
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control-donor donor-textarea"
                        name="description"
                        rows="5"
                        placeholder="Please describe your situation and how we can help"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                      ></textarea>
                    </div>

                    {error && (
                      <div className="col-12">
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      </div>
                    )}

                    <div className="col-12 text-end">
                      <button
                        className="btn btn-donor-submit"
                        type="submit"
                        disabled={processing}
                      >
                        {processing ? 'Submitting...' : 'Submit Request'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Proof Button Section */}
              <div className="donor-donate-section mt-5">
                <div className="row align-items-center">
                  <div className="col-md-4">
                  </div>

                  <div className="col-md-8">
                    <h3 className="donor-donate-title">Enter your proof here</h3>

                    <button
                      className="btn btn-donor-get-started"
                      onClick={() => navigate("/proof-upload")}
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

export default NeedyRequests;
