import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "../components/home/Home";
import MovieDetail from "../components/movie/MovieDetail";

export default class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/movie-detail/:id/:slug" component={MovieDetail} />
          <Route expact path="/" component={Home} />
          {/* <Route component={Home} /> */}
        </Switch>
      </div>
    );
  }
}
