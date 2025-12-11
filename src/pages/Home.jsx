import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="app-container">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-decoration-top"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="hero-heading">We want to help people</h1>
              <p className="hero-subheading">We're dedicated to helping our clients achieve their goals.</p>
              {/* <button className="btn btn-hero">Learn More</button> */}
            </div>
          </div>
        </div>
        <div className="hero-decoration-bottom"></div>
      </section>

      {/* Content Section - Three Columns */}
      <section className="content-section">
        <div className="container">
          <div className="row g-4">
            {/* Column 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="content-card">
                <div className="content-image-wrapper">
                  <img 
                    src="/images/helping-hand.jpg" 
                    alt="Person helping another on the street" 
                    className="content-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop';
                    }}
                  />
                </div>
                <h3 className="content-title">Because Every Heart Matters</h3>
                <p className="content-text">
                  We see each person as a human story, not a number. Our mission is to lift dignity, not just provide resources.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="content-card">
                <div className="content-image-wrapper">
                  <img 
                    src="/images/hands-together.jpg" 
                    alt="Hands together around a table" 
                    className="content-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop';
                    }}
                  />
                </div>
                <h3 className="content-title">Your Help Reaches Homes</h3>
                <p className="content-text">
                  We personally deliver aid to families to ensure it reaches those who truly need it without middlemen.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="content-card">
                <div className="content-image-wrapper">
                  <img 
                    src="/images/handshake.jpg" 
                    alt="Professional handshake" 
                    className="content-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop';
                    }}
                  />
                </div>
                <h3 className="content-title">Together, We Rise</h3>
                <p className="content-text">
                  When we support one another, we create stronger, more compassionate communities.
                </p>
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

export default Home;

