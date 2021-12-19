import React, { Component } from "react";
import MovieService from "../../services/MovieService";
import MovieGridItem from "./MovieGridItem";

export default class MovieGrid extends Component {
  constructor(props) {
    super(props);
    // this.onChangeSearchName = this.onChangeSearchName.bind(this);
    // this.retrieveMovies = this.retrieveMovies.bind(this);
    // this.searchMovie = this.searchMovie.bind(this);

    this.state = {
      movies: [],
      // searchTitle: "",
    };
  }

  // viewMovieDetail(id) {
  //   this.props.history.push(`/movie-detail/${id}`);
  // }

  componentDidMount() {
    MovieService.getAll().then((res) => {
      this.setState({ movies: res.data });
      console.log(res.data);
      console.log(this.state.movies);
    });
  }

  mappingData = () => {
    const movieList = this.state.movies.map((movie, i) => {
      return <MovieGridItem key={i} movie={movie}></MovieGridItem>;
    });
    return movieList;
  };

  render() {
    return (
      <section className="movie-section padding-top padding-bottom">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-lg-9 mb-50 mb-lg-0">
              <div className="filter-tab tab">
                {/* <div className="section-header-2">
                  <ul className="tab-menu">
                    <li className="active">now showing</li>
                    <li>coming soon</li>
                  </ul>
                </div> */}

                <div className="section-header-2">
                  <div className="left">
                    <h2 className="title">movies</h2>
                    <p>Be sure not to miss these Movies today.</p>
                  </div>
                  <ul className="tab-menu">
                    <li className="active">now showing</li>
                    <li>coming soon</li>
                  </ul>
                </div>

                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="row mb-10 justify-content-center">
                      {this.mappingData()}
                    </div>
                  </div>
                  <div className="tab-item">
                    <div className="movie-area mb-10">
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie01.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie01.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">alone</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie02.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie02.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">mars</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie03.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie03.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">venus</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie04.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie04.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">on watch</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie05.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie05.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">fury</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie06.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie06.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">trooper</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie07.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie07.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">horror night</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie08.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie08.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">the lost name</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie09.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie09.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">calm stedfast</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie10.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie10.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">criminal on party</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie11.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie11.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">halloween party</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            data-background="assets/images/movie/movie12.jpg"
                          >
                            <img
                              className="d-sm-none"
                              src="assets/images/movie/movie12.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">the most wanted</a>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-area text-center">
                  <a href="#0">
                    <i className="fas fa-angle-double-left" />
                    <span>Prev</span>
                  </a>
                  <a href="#0">1</a>
                  <a href="#0">2</a>
                  <a href="#0" className="active">
                    3
                  </a>
                  <a href="#0">4</a>
                  <a href="#0">5</a>
                  <a href="#0">
                    <span>Next</span>
                    <i className="fas fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
