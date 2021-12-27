import React, { Component } from "react";
import MovieSynopsis from "./MovieSynopsis";
import MoviePhotoItem from "./photo/MoviePhotoItem";
import MoviePhoto from "./photo/MoviePhoto";
import MovieCastList from "./cast/MovieCastList";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class MovieDetailsSection extends Component {
  mappingDataPhoto = () => {
    if (this.props.movie.photo_urls) {
      var photoList = this.props.movie.photo_urls.map((item, i) => {
        return <MoviePhotoItem key={i} photo={item}></MoviePhotoItem>;
      });
      return photoList;
    }
  };

  render() {
    console.log(this.props.movie);

    return (
      <section className="movie-details-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center flex-wrap-reverse mb--50">
            <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
              <div className="widget-1 widget-tags">
                <ul>
                  <li>
                    <a href="#0">2D</a>
                  </li>
                  <li>
                    <a href="#0">imax 2D</a>
                  </li>
                  <li>
                    <a href="#0">4DX</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mb-50">
              <div className="movie-details">
                <h3 className="title">photos</h3>
                {/* <MoviePhoto photo_urls = {this.props.movie.image}></MoviePhoto> */}

                {/* <div className="details-photos owl-carousel"> */}
                {/* {this.mappingDataPhoto()} */}
                <OwlCarousel className="details-photos" loop margin={3}>
                  <div className="thumb">
                    <img
                      src="/assets/images/movie/movie-details01.jpg"
                      alt="movie"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="/assets/images/movie/movie-details02.jpg"
                      alt="movie"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="/assets/images/movie/movie-details03.jpg"
                      alt="movie"
                    />
                  </div>
                  {/* </div> */}
                </OwlCarousel>

                <div className="tab summery-review">
                  <ul className="tab-menu">
                    <li className="active">summery</li>
                  </ul>
                  <div className="tab-area">
                    <div className="tab-item active">
                      <MovieSynopsis>{this.props.movie.synopsis}</MovieSynopsis>

                      <div className="item">
                        <h5 className="sub-title">Producers</h5>

                        <a href="#0">
                          {
                            "Toho, Sound Team Don Juan, Amuse, JR East Marketing & Communications, Kadokawa, voque ting"
                          }
                        </a>
                      </div>
                      <div className="item">
                        <h5 className="sub-title">Studio</h5>

                        <a href="#0">CoMix Wave Films</a>
                      </div>

                      <MovieCastList
                        casts={this.props.movie.casts}
                      ></MovieCastList>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
