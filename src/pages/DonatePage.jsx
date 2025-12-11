import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DonatePage() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div className="page-top-border"></div>
      <Header />

      <section className="donor-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Title */}
              <div className="text-center mb-4">
                <h1 className="donor-title">Make a Donation</h1>
                <p className="donor-subtitle">
                  Choose a way to support families and individuals in need.
                </p>
              </div>

              {/* Donation Options */}
              <div className="row g-4">

                {/* Option 1 – Food */}
                {/* <div className="col-md-4">
                  <div className="donate-box">
                  
                    <h3 className="donate-option-title">Food Support</h3>
                    <p className="donate-option-text">
                      Help families struggling to afford basic meals.
                    </p>
                    <button className="btn btn-donor-submit w-100">
                      Donate Food
                    </button>
                  </div>
                </div> */}

                {/* Option 2 – Clothes */}
                {/* <div className="col-md-4">
                  <div className="donate-box">
            
                    <h3 className="donate-option-title">Clothes</h3>
                    <p className="donate-option-text">
                      Provide warm clothes, shoes, and essentials.
                    </p>
                    <button className="btn btn-donor-submit w-100">
                      Donate Clothes
                    </button>
                  </div>
                </div> */}

                {/* Option 3 – Money */}
                <div className="col-md-4">
                  <div className="donate-box">
                    
                    <h3 className="donate-option-title">Financial Help</h3>
                    <p className="donate-option-text">
                      Support urgent financial or medical needs.
                    </p>
                    <button 
                      className="btn btn-donor-submit w-100"
                      onClick={() => navigate('/donor-requests')}
                    >
                      Donate Money
                    </button>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <hr className="my-5" />

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

export default DonatePage;
