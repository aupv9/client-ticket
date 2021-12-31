import React, { Component } from "react";
import BannerMovieDetail from "./BannerMovieDetail";
import BookMovieDetail from "./BookMovieDetail";
import MovieService from "../../services/MovieService";
import MovieDetailsSection from "./MovieDetailsSection";

export class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      movie: {},
    };
  }

  componentDidMount() {
    MovieService.getMovieById(this.state.id).then((res) => {
      // console.log(res.data);
      this.setState({ movie: res.data });
      console.log(this.state.movie);
    });
  }

  render() {
    return (
      <div>
        <BannerMovieDetail movie={this.state.movie}></BannerMovieDetail>
        <BookMovieDetail movieID={this.state.id}></BookMovieDetail>
        {/* <MovieDetailContent movie={this.state.movie}></MovieDetailContent> */}
        <MovieDetailsSection movie={this.state.movie}></MovieDetailsSection>
      </div>
    );
  }
}

export default MovieDetail;
