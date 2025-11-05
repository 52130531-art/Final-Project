import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Services() {
  return (
    <div className="app-container">
      <div className="page-top-border"></div>
      <Header />
      
      {/* Top Section - Light Blue Background */}
      <section className="services-top-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="services-top-heading">Finding Inspiration</h1>
              <p className="services-top-text">
                We are always looking for talented and motivated individuals to join our team. If you are passionate and share our values, we encourage you to explore career opportunities with us.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="services-top-image-wrapper">
                <img 
                  src="/images/whiteboard-notes.jpg" 
                  alt="Whiteboard with yellow sticky notes" 
                  className="services-top-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Dark Teal Background */}
      <section className="services-bottom-section">
        {/* First Content Block - Left Image, Right Text */}
        <div className="services-content-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                <div className="services-content-image-wrapper">
                  <img 
                    src="/images/writing-hands.jpg" 
                    alt="Person writing on paper" 
                    className="services-content-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop';
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                <div className="services-content-text">
                  <h2 className="services-content-heading">Support Those in Need</h2>
                  <p className="services-content-paragraph">
                    We connect generous donors with individuals and families who need urgent help. Your contribution small or large can make a real difference in someone's life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Content Block - Right Image, Left Text */}
        <div className="services-content-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-content-text">
                  <h2 className="services-content-heading">Your Help Can Change a Life</h2>
                  <p className="services-content-paragraph">
                    We ensure that every request is verified and genuine. You can donate with trust and follow the impact of your support through our transparent system.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="services-content-image-wrapper">
                  <img 
                    src="/images/skyscrapers.jpg" 
                    alt="Modern skyscrapers" 
                    className="services-content-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop';
                    }}
                  />
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

export default Services;

