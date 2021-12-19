import React, { Component } from "react";
import MovieGrid from "../movie/MovieGrid";
import About from "./About";

import Banner from "./Banner";
import MoviesList from "./MovieList";
import Search from "./Search";
import UserProfile from "./user/UserProfile";

export default class Home extends Component {
  render() {
    return (
      <div id="main-content">
        <Banner></Banner>
        <Search></Search>
        <MovieGrid></MovieGrid>
        {/* <About /> */}
        {/* <UserProfile /> */}
      </div>
    );
  }
}
