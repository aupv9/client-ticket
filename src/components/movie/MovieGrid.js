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
    // console.log(this.props.mode);
    // if (this.props.mode === "comingsoon") {
    //   this.getComingSoon();
    // } else if (this.props.mode === "nowshowing") {
    //   this.getComingSoon();
    // } else 
    // eslint-disable-next-line no-lone-blocks
    {
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
  }
  getComingSoon() {
    console.log("soon")
    // MovieService.getComingSoon()
    //   .then((res) => {
    //     this.setState({ allMovies: res.data });
    //   })
    //   .then(() => {
    //     if (this.props.searchTitle !== "" && this.state.allMovies) {
    //       var movieData = this.state.allMovies.filter((movie) =>
    //         movie.name.includes(this.removeAccents(this.props.searchTitle))
    //       );
    //       this.setState({ movies: movieData });
    //     } else this.setState({ movies: this.state.allMovies });
    //     console.log(this.state.movies);
    //   });
  }

  getNowShowing() {
    console.log("now")
    // MovieService.getNowShowing()
    //   .then((res) => {
    //     this.setState({ allMovies: res.data });
    //   })
    //   .then(() => {
    //     if (this.props.searchTitle !== "" && this.state.allMovies) {
    //       var movieData = this.state.allMovies.filter((movie) =>
    //         movie.name.includes(this.removeAccents(this.props.searchTitle))
    //       );
    //       this.setState({ movies: movieData });
    //     } else this.setState({ movies: this.state.allMovies });
    //     console.log(this.state.movies);
    //   });
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
      return <MovieGridItem key={i} movie={movie}></MovieGridItem>;
    });
    return movieList;
  };

  render() {
    console.log("render list");
    return (
      <div className="tab-area">
        <div className="tab-item active">
          <div className="row mb-10 justify-content-center">
            {this.mappingData()}
          </div>
        </div>
      </div>
    );
  }
}
