import React, { Component } from "react";
import BannerMovieDetail from "./BannerMovieDetail";
import BookMovieDetail from "./BookMovieDetail";
import MovieDetailContent from "./MovieDetailContent";
import MovieService from "../../services/MovieService";

export class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      movie: {},
    };

    console.log("vo detail page");

    console.log(this.state);

    // MovieService.getMovieById(this.state.id).then((res) => {
    //   this.setState({ movie: res.data });
    //   console.log(this.state);
    // });
  }

  componentDidMount() {
    MovieService.getMovieById(this.state.id).then((res) => {
      this.setState({ movie: res.data });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <BannerMovieDetail movie={this.state.movie}></BannerMovieDetail>
        <BookMovieDetail></BookMovieDetail>
        <MovieDetailContent movie={this.state.movie}></MovieDetailContent>
      </div>
    );
  }
}

export default MovieDetail;
