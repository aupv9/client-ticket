import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "../components/home/Home";
import BookingCheckout from "../components/movie/booking-checkout/BookingCheckout";
import BookingFood from "../components/movie/booking-food/BookingFood";
import SeatPlan from "../components/movie/booking-seat-plan/SeatPlan";
import TicketPlan from "../components/movie/booking-ticket-plan/TicketPlan";
import MovieDetail from "../components/movie/MovieDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import TicketPlan from "../components/movie/booking-ticket-plan/TicketPlan";
// import Register from "../pages/Register";

export default class RouterURL extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/movie-detail/:id/:slug" component={MovieDetail} />
          <Route path="/choose-theater/:id" component={TicketPlan} />
          <Route path="/choose-seats/:id" component={SeatPlan} />
          <Route path="/choose-foods/:id" component={BookingFood} />
          <Route path="/checkout" component={BookingCheckout} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register} />
          <Route expact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}
