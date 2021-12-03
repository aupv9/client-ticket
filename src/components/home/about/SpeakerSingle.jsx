import React, { Component } from "react";

class SpeakerSingle extends React.Component {
  render() {
    return (
      <div>
        {/* ==========Speaker-Single========== */}
        <section className="about-section padding-top padding-bottom">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="event-about-content">
                  <div className="section-header-3 left-style m-0">
                    <span className="cate">we are Boleto </span>
                    <h2 className="title">Get to know us</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor ut labore et dolore magna aliqua.
                      Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor ut labore et dolore magna aliqua.
                      Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit
                    </p>
                    <a href="#0" className="custom-button">
                      book tickets
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div className="about-thumb">
                  <img src="assets/images/about/about01.png" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Speaker-Single========== */}
      </div>
    );
  }
}

export default SpeakerSingle;
