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
      allMovies: [],
      movies: [],
      searchTitle: this.props.searchTitle,
    };
    console.log(this.props.searchTitle);
    this.getNowShowing = this.getNowShowing.bind(this);
  }

  // viewMovieDetail(id) {
  //   this.props.history.push(`/movie-detail/${id}`);
  // }

  componentDidMount() {
    MovieService.getAll()
      .then((res) => {
        this.setState({ allMovies: res.data });
      })
      .then(() => {
        if (this.props.searchTitle !== "" && this.state.allMovies) {
          var movieData = this.state.allMovies.filter((movie) =>
            movie.name.includes(this.removeAccents(this.props.searchTitle))
          );
          this.setState({ movies: movieData });
        } else this.setState({ movies: this.state.allMovies });
        console.log(this.state.movies);
      });
  }

  getComingSoon() {
    MovieService.getComingSoon()
    .then((res) => {
      this.setState({ allMovies: res.data });
    })
    .then(() => {
      if (this.props.searchTitle !== "" && this.state.allMovies) {
        var movieData = this.state.allMovies.filter((movie) =>
          movie.name.includes(this.removeAccents(this.props.searchTitle))
        );
        this.setState({ movies: movieData });
      } else this.setState({ movies: this.state.allMovies });
      console.log(this.state.movies);
    });
  }

  getNowShowing() {
    MovieService.getNowShowing()
    .then((res) => {
      this.setState({ allMovies: res.data });
    })
    .then(() => {
      if (this.props.searchTitle !== "" && this.state.allMovies) {
        var movieData = this.state.allMovies.filter((movie) =>
          movie.name.includes(this.removeAccents(this.props.searchTitle))
        );
        this.setState({ movies: movieData });
      } else this.setState({ movies: this.state.allMovies });
      console.log(this.state.movies);
    });
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.searchTitle !== newProps.searchTitle &&
      this.props.searchTitle !== ""
    ) {
      var movieData = this.state.allMovies.filter((movie) =>
        movie.name.includes(this.removeAccents(newProps.searchTitle))
      );
      this.setState({ movies: movieData });
    } else this.setState({ movies: this.state.allMovies });
    console.log(this.state.movies);
  }

  removeAccents(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  // comingShowtime(movieId) {
  //   ShowtimeService.getShowTimesByMovieId(movieId).then(res => {
  //     console.log(res.data)
  //     return res.data;
  //   })
  // }

  mappingData = () => {
    const movieList = this.state.movies.map((movie, i) => {
      return (
        <MovieGridItem
          key={i}
          movie={movie}
        ></MovieGridItem>
      );
    });
    return movieList;
  };

  render() {
    console.log("render list");
    return (
      <section className="movie-section padding-top padding-bottom">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-lg-9 mb-50 mb-lg-0">
              <div className="filter-tab tab">
                <div className="section-header-2">
                  <div className="left">
                    <h2 className="title">movies</h2>
                    <p>Đừng bỏ lỡ những bộ phim hấp dẫn.</p>
                  </div>
                  <ul className="tab-menu">
                    {/* <li onClick={this.getNowShowing()} className="active">
                      now showing
                    </li> */}
                    {/* <li onClick={this.getComingSoon()}>coming soon</li> */}
                  </ul>
                </div>

                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="row mb-10 justify-content-center">
                      {this.mappingData()}
                    </div>
                  </div>
                  
                </div>
                {/* <div className="pagination-area text-center">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
