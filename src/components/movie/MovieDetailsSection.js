import React, { Component } from "react";
import MovieSynopsis from "./MovieSynopsis";
import MoviePhotoItem from "./photo/MoviePhotoItem";
import { Carousel } from 'react-responsive-carousel';
import MoviePhoto from "./photo/MoviePhoto";

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
                <MoviePhoto photo_urls = {this.props.movie.photo_urls}></MoviePhoto>
                <div className="tab summery-review">
                  <ul className="tab-menu">
                    <li className="active">summery</li>
                  </ul>
                  <div className="tab-area">
                    <div className="tab-item active">
                      
                      <MovieSynopsis>{this.props.movie.synopsis}</MovieSynopsis>
                      <div className="item">
                        <div className="header">
                          <h5 className="sub-title">cast</h5>
                          <div className="navigation">
                            <div className="cast-prev">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                            <div className="cast-next">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                          </div>
                        </div>
                        <div className="casting-slider owl-carousel">
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast01.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">Bill Hader</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As Richie Tozier</p>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast02.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">nora hardy</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As raven</p>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast03.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">alvin peters</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As magneto</p>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast04.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">josh potter</a>
                              </h6>
                              <span className="cate">actor</span>
                              <p>As quicksilver</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="header">
                          <h5 className="sub-title">crew</h5>
                          <div className="navigation">
                            <div className="cast-prev-2">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                            <div className="cast-next-2">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                          </div>
                        </div>
                        <div className="casting-slider-two owl-carousel">
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast05.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">pete warren</a>
                              </h6>
                              <span className="cate">actor</span>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast06.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">howard bass</a>
                              </h6>
                              <span className="cate">executive producer</span>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast07.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">naomi smith</a>
                              </h6>
                              <span className="cate">producer</span>
                            </div>
                          </div>
                          <div className="cast-item">
                            <div className="cast-thumb">
                              <a href="#0">
                                <img
                                  src="/assets/images/cast/cast08.jpg"
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="cast-content">
                              <h6 className="cast-title">
                                <a href="#0">tom martinez</a>
                              </h6>
                              <span className="cate">producer</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
