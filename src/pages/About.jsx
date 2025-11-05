import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="app-container">
      <div className="page-top-border"></div>
      <Header />
      
      {/* About Main Content Section */}
      <section className="about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="about-content">
                <h1 className="about-heading">Why We Started?</h1>
                <div className="about-text">
                  <p>
                    Every day someone is struggling silently. One person may be unable to afford basic necessities, another may be seeking urgent medical support, and another simply needs to feel that someone cares.
                  </p>
                  <p>
                    Helping Hands was created to make sure these voices are not ignored. We built this platform to connect those who are willing to help with those who truly need it. Here, every request is real, every donation has purpose, and every act of kindness creates hope.
                  </p>
                  <p>
                    Together, we are not just giving – we are changing lives. One hand reaching another. One heart supporting another. One step towards a kinder world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Bottom Section with Decorative Elements */}
      <section className="about-bottom-section">
        <div className="about-decoration-circle"></div>
        <div className="about-decoration-spiral"></div>
      </section>

      <Footer />
      
      {/* Side borders */}
      <div className="side-border left-border"></div>
      <div className="side-border right-border"></div>
    </div>
  );
}

export default About;

