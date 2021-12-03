import React, { Component } from "react";

class AboutTour extends React.Component {
  render() {
    return (
      <div>
        {/* ==========Tour-Section========== */}
        <section className="tour-section padding-top padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="tour-content">
                  <div className="section-header-3 left-style">
                    <span className="cate">take a look at our tour</span>
                    <h2 className="title">Guarantees you can trust.</h2>
                    <p className="ml-0">
                      Because more peace of mind means more love for the event.
                    </p>
                  </div>
                  <ul className="list-tour">
                    <li>
                      <div className="thumb">
                        <img src="assets/images/tour/icon01.png" alt="tour" />
                      </div>
                      <div className="content">
                        <h5 className="title">Get In Guarantee</h5>
                        <p>
                          Authentic tickets, on-time delivery, and access to
                          your event. Or your money back. Period.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <img src="assets/images/tour/icon02.png" alt="tour" />
                      </div>
                      <div className="content">
                        <h5 className="title">price match guarantee</h5>
                        <p>
                          The best prices are here. If you spot a better deal
                          elsewhere, we’ll cover the difference.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="tour-thumb">
                  <img src="assets/images/tour/tour.png" alt="tour" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Tour-Section========== */}
      </div>
    );
  }
}

export default AboutTour;
