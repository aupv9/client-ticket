import React, { Component } from "react";
import MovieOffer from "./details/MovieOffer";
import MovieTags from "./details/MovieTags";
import MovieCastList from "./cast/MovieCastList";
import MoviePhoto from "./photo/MoviePhoto";
import MovieSynopsis from "./MovieSynopsis";

export default class MovieDetailContent extends Component {
  render() {
    return (
      <div>
        <section className="movie-details-section padding-top padding-bottom">
          <div className="container">
            <div className="row justify-content-center flex-wrap-reverse mb--50">
              <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
                <MovieTags />
                <MovieOffer />
              </div>
              <div className="col-lg-9 mb-50">
                <div className="movie-details">
                  <MoviePhoto
                    photo_urls={this.props.movie.photo_urls}
                  ></MoviePhoto>
                  <div className="tab summery-review">
                    <ul className="tab-menu">
                      <li className="active">summery</li>
                      {/* <li>
                      user review <span>147</span>
                    </li> */}
                    </ul>
                    <div className="tab-area">
                      <div className="tab-item active">
                        <div className="item">
                          <MovieSynopsis>
                            {this.props.movie.synopsis}
                          </MovieSynopsis>
                        </div>
                        <div className="item">
                          <MovieCastList
                            casts={this.props.movie.casts}
                          ></MovieCastList>
                        </div>
                      </div>
                      {/* <div className="tab-item">
                      <div className="movie-review-item">
                        <div className="author">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/cast/cast02.jpg"
                                }
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div className="movie-review-info">
                            <span className="reply-date">13 Days Ago</span>
                            <h6 className="subtitle">
                              <a href="#0">minkuk seo</a>
                            </h6>
                            <span>
                              <i className="fas fa-check" /> verified review
                            </span>
                          </div>
                        </div>
                        <div className="movie-review-content">
                          <div className="review">
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                          </div>
                          <h6 className="cont-title">Awesome Movie</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer volutpat enim non ante egestas
                            vehicula. Suspendisse potenti. Fusce malesuada
                            fringilla lectus venenatis porttitor.{" "}
                          </p>
                          <div className="review-meta">
                            <a href="#0">
                              <i className="flaticon-hand" />
                              <span>8</span>
                            </a>
                            <a href="#0" className="dislike">
                              <i className="flaticon-dont-like-symbol" />
                              <span>0</span>
                            </a>
                            <a href="#0">Report Abuse</a>
                          </div>
                        </div>
                      </div>
                      <div className="movie-review-item">
                        <div className="author">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/cast/cast04.jpg"
                                }
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div className="movie-review-info">
                            <span className="reply-date">13 Days Ago</span>
                            <h6 className="subtitle">
                              <a href="#0">rudra rai</a>
                            </h6>
                            <span>
                              <i className="fas fa-check" /> verified review
                            </span>
                          </div>
                        </div>
                        <div className="movie-review-content">
                          <div className="review">
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                          </div>
                          <h6 className="cont-title">Awesome Movie</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer volutpat enim non ante egestas
                            vehicula. Suspendisse potenti. Fusce malesuada
                            fringilla lectus venenatis porttitor.{" "}
                          </p>
                          <div className="review-meta">
                            <a href="#0">
                              <i className="flaticon-hand" />
                              <span>8</span>
                            </a>
                            <a href="#0" className="dislike">
                              <i className="flaticon-dont-like-symbol" />
                              <span>0</span>
                            </a>
                            <a href="#0">Report Abuse</a>
                          </div>
                        </div>
                      </div>
                      <div className="movie-review-item">
                        <div className="author">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/cast/cast01.jpg"
                                }
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div className="movie-review-info">
                            <span className="reply-date">13 Days Ago</span>
                            <h6 className="subtitle">
                              <a href="#0">rafuj</a>
                            </h6>
                            <span>
                              <i className="fas fa-check" /> verified review
                            </span>
                          </div>
                        </div>
                        <div className="movie-review-content">
                          <div className="review">
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                          </div>
                          <h6 className="cont-title">Awesome Movie</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer volutpat enim non ante egestas
                            vehicula. Suspendisse potenti. Fusce malesuada
                            fringilla lectus venenatis porttitor.{" "}
                          </p>
                          <div className="review-meta">
                            <a href="#0">
                              <i className="flaticon-hand" />
                              <span>8</span>
                            </a>
                            <a href="#0" className="dislike">
                              <i className="flaticon-dont-like-symbol" />
                              <span>0</span>
                            </a>
                            <a href="#0">Report Abuse</a>
                          </div>
                        </div>
                      </div>
                      <div className="movie-review-item">
                        <div className="author">
                          <div className="thumb">
                            <a href="#0">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/cast/cast03.jpg"
                                }
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div className="movie-review-info">
                            <span className="reply-date">13 Days Ago</span>
                            <h6 className="subtitle">
                              <a href="#0">bela bose</a>
                            </h6>
                            <span>
                              <i className="fas fa-check" /> verified review
                            </span>
                          </div>
                        </div>
                        <div className="movie-review-content">
                          <div className="review">
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                            <i className="flaticon-favorite-heart-button" />
                          </div>
                          <h6 className="cont-title">Awesome Movie</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer volutpat enim non ante egestas
                            vehicula. Suspendisse potenti. Fusce malesuada
                            fringilla lectus venenatis porttitor.{" "}
                          </p>
                          <div className="review-meta">
                            <a href="#0">
                              <i className="flaticon-hand" />
                              <span>8</span>
                            </a>
                            <a href="#0" className="dislike">
                              <i className="flaticon-dont-like-symbol" />
                              <span>0</span>
                            </a>
                            <a href="#0">Report Abuse</a>
                          </div>
                        </div>
                      </div>
                      <div className="load-more text-center">
                        <a href="#0" className="custom-button transparent">
                          load more
                        </a>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
