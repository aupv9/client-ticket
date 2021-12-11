import React, { Component } from "react";
import MovieService from "../../../services/MovieService";
import BannerTicketPlan from "./BannerTicketPlan";
import BookingFilterPlan from "./BookingFilterPlan";
import TicketOption from "./TicketOption";

export default class TicketPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   id: this.props.match.params.id,
    id: 100,
      movie: {},
    };
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
        <BannerTicketPlan movie={this.state.movie}></BannerTicketPlan>
        <BookingFilterPlan></BookingFilterPlan>
        <TicketOption></TicketOption>
      </div>
    );
  }
}
