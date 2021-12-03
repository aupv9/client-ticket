import React, { Component } from "react";

class AboutCounter extends React.Component {
  render() {
    return (
      <div>
        {/* ==========About-Counter-Section========== */}
        <section className="about-counter-section padding-bottom padding-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-header-3 left-style mb-lg-0">
                  <span className="cate">quick facts</span>
                  <h2 className="title">fun facts</h2>
                  <p>
                    Objectively seize scalable metrics whereas proactive
                    services seamlessly empower fully researched growth
                    strategies
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-counter">
                  <div className="counter-item">
                    <div className="counter-thumb">
                      <img
                        src="assets/images/about/about-counter01.png"
                        alt="about"
                      />
                    </div>
                    <div className="counter-content">
                      <h3 className="title odometer" data-odometer-final={30} />
                      <h3 className="title">M+</h3>
                    </div>
                    <span className="d-block info">Customers</span>
                  </div>
                  <div className="counter-item">
                    <div className="counter-thumb">
                      <img
                        src="assets/images/about/about-counter02.png"
                        alt="about"
                      />
                    </div>
                    <div className="counter-content">
                      <h3 className="title odometer" data-odometer-final={11} />
                    </div>
                    <span className="d-block info">Contries</span>
                  </div>
                  <div className="counter-item">
                    <div className="counter-thumb">
                      <img
                        src="assets/images/about/about-counter03.png"
                        alt="about"
                      />
                    </div>
                    <div className="counter-content">
                      <h3
                        className="title odometer"
                        data-odometer-final={650}
                      />
                      <h3 className="title">+</h3>
                    </div>
                    <span className="d-block info">Towns &amp; Cities</span>
                  </div>
                  <div className="counter-item">
                    <div className="counter-thumb">
                      <img
                        src="assets/images/about/about-counter04.png"
                        alt="about"
                      />
                    </div>
                    <div className="counter-content">
                      <h3
                        className="title odometer"
                        data-odometer-final={5000}
                      />
                      <h3 className="title">+</h3>
                    </div>
                    <span className="d-block info">Screens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========About-Counter-Section========== */}
      </div>
    );
  }
}

export default AboutCounter;
