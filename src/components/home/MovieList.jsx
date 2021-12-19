import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../services/MovieService";
import MovieItem from "../movie/MovieItem";

export default class MoviesList extends Component {
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

  // onChangeSearchMovie(e) {
  //   const searchMovie = e.target.value;

  //   this.setState({
  //     searchMovie: searchMovie,
  //   });
  // }

  // retrieveMovies() {
  //   MovieDataService.getAll()
  //     .then((response) => {
  //       this.setState({
  //         movies: response.data,
  //       });
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  // refreshList() {
  //   this.retrieveMovies();
  // }

  // searchMovie() {
  //   MovieDataService.findByName(this.state.searchName)
  //     .then((response) => {
  //       this.setState({
  //         movies: response.data,
  //       });
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  mappingData = () => {
    const movieList = this.state.movies.map((movie, i) => {
      return (


        <MovieItem key={i} movie={movie}></MovieItem>

      )
    });
    return movieList;
  };

  render() {
    // const { searchMovie, movies } = this.state;

    return (
      <div>
        <section className="movie-section padding-top padding-bottom">
          <div className="container">
            <div className="tab">
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
              <div className="tab-area mb-30-none">
                <div className="tab-item active">
                  {/* <Carousel infiniteLoop useKeyboardArrows autoPlay */}
                  <div className="owl-carousel owl-theme tab-slider">
                    {this.mappingData()}
                  </div>
                  {/* </Carousel> */}
                </div>
                <span>
                  {/* <div className="tab-item">
                  <div className="owl-carousel owl-theme tab-slider">
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie01.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">alone</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie02.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">mars</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie03.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">venus</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie04.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">horror night</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-item">
                  <div className="owl-carousel owl-theme tab-slider">
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie01.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">alone</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie02.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">mars</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie03.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">venus</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="movie-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="#0">
                            <img
                              src="/assets/images/movie/movie04.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title m-0">
                            <a href="#0">horror night</a>
                          </h5>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="/assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
