import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Initialize Stripe with your publishable key
// Replace with your actual Stripe publishable key from Stripe Dashboard
const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

// Payment form component
function PaymentForm({ formData, setFormData, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Create payment intent
      const response = await fetch('http://localhost:5000/api/donor/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          currency: 'usd',
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment with Stripe
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        // Get last 4 digits from the confirmed charge (payment_method on the intent is just an id)
        const confirmedCharge = paymentIntent.charges?.data?.[0];
        const last4 = confirmedCharge?.payment_method_details?.card?.last4;
        const last4Digits = last4 ? `****${last4}` : '****';
        
        // Update formData with creditcart info
        const updatedFormData = {
          ...formData,
          creditcart: last4Digits,
        };
        setFormData(updatedFormData);

        // Save donor information to database
        const donorData = {
          name: updatedFormData.name,
          email: updatedFormData.email,
          location: updatedFormData.location,
          phone: updatedFormData.phone,
          description: updatedFormData.description,
          creditcart: updatedFormData.creditcart,
        };

        console.log(donorData)
        const donorResponse = await fetch('http://localhost:5000/api/donor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(donorData),
        });

        if (donorResponse.ok) {
          alert('Thank you! Your donation has been processed successfully.');
          onSuccess();
        } else {
          setError('Payment succeeded but failed to save donor information.');
        }
      }
    } catch (err) {

      
      setError(err.message || 'An error occurred processing your payment.');
    } finally {
      setProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily: 'system-ui, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
        iconColor: '#9e2146',
      },
    },
  };

  return (
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
            type="number"
            className="form-control-donor"
            name="phone"
            placeholder="Phone number"
            value={formData.phone || ''}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div className="col-12">
          <textarea
            className="form-control-donor donor-textarea"
            name="description"
            rows="5"
            placeholder="How would you like to support?"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          ></textarea>
        </div>

        <div className="col-12">
          <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>
            Donation Amount (USD)
          </label>
          <input
            type="number"
            className="form-control-donor"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            step="0.01"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>
            Card Details
          </label>
          <div style={{ 
            padding: '12px', 
            border: '1px solid #ced4da', 
            borderRadius: '4px', 
            backgroundColor: '#fff',
            minHeight: '40px',
            color: 'black'
          }}>
            <CardElement options={cardElementOptions} />
          </div>
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
            // disabled={!stripe || processing}
          >
            {processing ? 'Processing...' : `Donate $${amount || '0.00'}`}
          </button>
        </div>
      </div>
    </form>
  );
}

function DonorRequests() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    description: '',
    creditcart: '', // Will be populated with last 4 digits after successful payment
  });

  const handleSuccess = () => {
    setFormData({
      name: '',
      location: '',
      email: '',
      phone: '',
      description: '',
      creditcart: '',
    });
  };

  if (!stripePromise) {
    return (
      <div className="app-container">
        <Header />
        <section className="donor-section">
          <div className="container text-center" style={{ padding: '40px 0' }}>
            <h2>Stripe publishable key is missing</h2>
            <p>Please set VITE_STRIPE_PUBLISHABLE_KEY in your environment and reload.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

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

                <Elements stripe={stripePromise}>
                  <PaymentForm
                    formData={formData}
                    setFormData={setFormData}
                    onSuccess={handleSuccess}
                  />
                </Elements>
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
                      onClick={() => navigate('/donate-page')}
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
