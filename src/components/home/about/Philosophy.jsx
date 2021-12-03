import React, { Component } from "react";

class Philosophy extends React.Component {
  render() {
    return (
      <div>
        {/* ==========Philosophy-Section========== */}
        <div
          className="philosophy-section padding-top padding-bottom bg-one bg_img bg_quater_img"
          data-background="assets/images/about/about-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-9 offset-lg-3 bg-two">
                <div className="philosophy-content">
                  <div className="section-header-3 left-style">
                    <span className="cate">Take look at</span>
                    <h2 className="title">Our philosophy</h2>
                    <p className="ml-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmtempor incididunt labore et dolore magna aliqu
                      enim ad minim veniam quis nostrud exercitation ullamco
                      laboris nisi ut aliquip
                    </p>
                  </div>
                  <ul className="phisophy-list">
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/images/philosophy/icon1.png"
                          alt="philosophy"
                        />
                      </div>
                      <h5 className="title">Honesty &amp; Fairness </h5>
                    </li>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/images/philosophy/icon2.png"
                          alt="philosophy"
                        />
                      </div>
                      <h5 className="title">Clarity &amp; Transparency</h5>
                    </li>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/images/philosophy/icon3.png"
                          alt="philosophy"
                        />
                      </div>
                      <h5 className="title">Focus on Customers</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==========Philosophy-Section========== */}
      </div>
    );
  }
}

export default Philosophy;
