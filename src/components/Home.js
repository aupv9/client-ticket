import React, { Component } from "react";

import Banner from "./home/Banner";
import Movie from "./home/Movie";
import Search from "./home/Search";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Search></Search>
        <Movie></Movie>
      </div>
    );
  }
}
