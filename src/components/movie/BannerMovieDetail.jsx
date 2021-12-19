import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default class BannerMovieDetail extends Component {
  watchTrailer = (url) => {
    console.log(url);
    window.open(url);
  };

  render() {
    return (
      <div>
        <section
          className="details-banner bg_img"
          data-background={
            process.env.PUBLIC_URL +
            "/assets/images/banner/" +
            this.props.movie.banner_url
          }
        >
          <div className="container">
            <div className="details-banner-wrapper">
              <div className="details-banner-thumb">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/movie/venus.jpg"
                  }
                  alt="movie"
                />
                <a 
                // onClick={this.watchTrailer("https://www.youtube.com/")}
                  href={this.props.movie.trailer_url}
                  // href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-not-popup"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/movie/video-button.png"
                    }
                    alt="movie"
                  />
                </a>
              </div>
              <div className="details-banner-content offset-lg-3">
                <h3 className="title">{this.props.movie.name}</h3>
                <div className="tags">
                  <a href="#0">{this.props.movie.language}</a>
                  {/* <a href="#0">Vietnamese</a> */}
                </div>
                <a href="#0" className="button">
                  {this.props.movie.genre}
                </a>
                <div className="social-and-duration">
                  <div className="duration-area">
                    <div className="item">
                      <i className="fas fa-calendar-alt" />
                      {/* <span>06 Dec, 2020</span> */}
                      <span>
                        {moment().calendar(this.props.movie.released_date)}
                      </span>
                    </div>
                    <div className="item">
                      <i className="far fa-clock" />
                      <span>{this.props.movie.duration_min}</span>
                    </div>
                  </div>
                  <ul className="social-share">
                    <li>
                      <a href="#0">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
