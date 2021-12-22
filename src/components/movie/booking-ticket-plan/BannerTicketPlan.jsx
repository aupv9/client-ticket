import React, { Component } from "react";

export default class BannerTicketPlan extends Component {
  render() {
    return (
      <section
        className="details-banner hero-area bg_img"
        // data-background="assets/images/banner/banner03.jpg"
        data-background={"/assets/images/banner/" + this.props.movie.banner_url}
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content">
              <h3 className="title">{this.props.movie.name}</h3>
              <div className="tags">
                <a href="#0">{this.props.movie.language}</a>
                {/* . */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
