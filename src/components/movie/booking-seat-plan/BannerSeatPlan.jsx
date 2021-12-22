import React, { Component } from "react";

export default class BannerSeatPlan extends Component {
  render() {
    return (
      <section
        className="details-banner hero-area bg_img seat-plan-banner"
        data-background="/assets/images/banner/banner04.jpg"
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content style-two">
              <h3 className="title">Venus</h3>
              <div className="tags">
                <a href="#0">City Walk</a>
                <a href="#0">English - 2D</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
