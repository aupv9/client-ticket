import React, { Component } from "react";
import ShowtimeService from "../../../services/ShowtimeService";

import TheaterService from "../../../services/TheaterService";
import SeatPlanRow from "./SeatPlanRow";

export default class TicketOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showtimes: this.props.showtimes,
      data: []
    };
  }


  groupBy(list, keyGetter) {
    if (list) {
      const map = new Map();
      list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      });
      return map;
    }
  }

  componentDidMount() {
    ShowtimeService.getShowTimesByMovieId(this.props.movieId).then((res) => {
      this.setState({
        showtimes: res.data
      });
      console.log(this.state);
      var showtimes = this.state.showtimes;
      var grouped = this.groupBy(showtimes, showtime => showtime.theaterId);
      console.log(grouped);
      var data = Array.from(grouped);
      this.setState({
        data: data
      })
      console.log(data);
    })

    // if (showtimes) {
    // var grouped = this.groupBy(showtimes, showtime => showtime.theaterId);
    // var data = Object.fromEntries();

    // if (grouped) {
    //   var theaters = grouped.map((item) => {
    //     var theater = item;
    //     theater.data = this.theaterData(theater.id);
    //     return theater;
    //   })

    //   console.log(theaters);
    // }
    // }

  }

  theaterData = (theaterId) => {
    TheaterService.getTheaterById(theaterId).then((res) => {
      // console.log(res.data);
      // this.setState({
      //   grouped: {
      //     name: res.data
      //   }
      // });
      return res.data;
    });
  }

  mappingData = () => {
    if (this.state.data) {
      var showtimesTable = this.state.data.map((item, i) => {
        console.log(item);
        return <SeatPlanRow movieId={this.props.movieId} key={i} showtime={item}></SeatPlanRow>;
      });

      return showtimesTable;
    }
  };

  render() {
    return (
      <div className="ticket-plan-section padding-bottom padding-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-5 mb-lg-0">
              <ul className="seat-plan-wrapper bg-five">
                {this.mappingData()}
              </ul>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img
                      src="assets/images/sidebar/banner/banner03.jpg"
                      alt="banner"
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
