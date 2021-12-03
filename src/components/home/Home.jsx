import React, { Component } from "react";
import About from "./About";

import Banner from "./Banner";
import MoviesList from "./MovieList";
import Search from "./Search";
import UserProfile from "./user/UserProfile";

export default class Home extends Component {
  render() {
    return (
      <div className="container" id="main-content">
        <Banner></Banner>
        <Search></Search>
        <MoviesList></MoviesList>
        {/* <About /> */}
        {/* <UserProfile /> */}
      </div>
    );
  }
}
