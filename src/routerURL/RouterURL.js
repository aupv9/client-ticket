import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "../components/home/Home";
import MovieDetail from "../components/movie/MovieDetail";
import TicketPlan from "../components/movie/booking-ticket-plan/TicketPlan";
import Register from "../pages/Register";

export default class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route path="/movie-detail/:id/:slug" component={MovieDetail} /> */}
          <Route expact path="/" component={Home} />
          {/* <Route component={Home} /> */}
        </Switch>
      </div>
    );
  }
}
