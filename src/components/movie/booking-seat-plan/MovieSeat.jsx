import React, { Component } from "react";
import { Link } from "react-router-dom";
import SeatService from "../../../services/SeatService";
import ShowtimeService from "../../../services/ShowtimeService";
import SeatItem from "./SeatItem";

export default class MovieSeat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showtimeId: this.props.showtimeId,
      seats: [],
      showtime: {},
      seatsPerRow: 10,
      bookedSeats: []
    };
    console.log(this.props);
  }

  componentDidMount() {
    ShowtimeService.getShowTimeById(this.state.showtimeId).then((res) => {
      this.setState({ showtime: res.data });
      SeatService.getSeatsByRoomIdandShowtimeId(this.state.showtime.roomId, this.state.showtimeId).then((res) => {
        this.setState({ seats: res.data });
        console.log(this.state);
      });
    })
  }

  handleCallback = (number, isBooked) => {
    var seatStatus = this.state.bookedSeats;
    if (isBooked) {
      if (!this.state.bookedSeats.includes(number)) {
        seatStatus.push(number);

        this.setState({ bookedSeats: seatStatus })

      }

    } else {
      seatStatus = seatStatus.filter(x => x !== number);


      this.setState({ bookedSeats: seatStatus })
    }
  }

  mappingData(tier) {
    if (this.state.seats) {
      var temp = (tier - 1) * 10;
      var data = this.state.seats.slice(temp, temp + this.state.seatsPerRow)
      var rowOfSeat = data.map((item, i) => {
        return (
          <SeatItem parentCallback={this.handleCallback} number={item.numbers} key={i} isSelected={item.isSelected} />
        )
      })
      return rowOfSeat;
    }
  }

  proceed() {
    // console.log(this.state.bookedSeats);
    localStorage.setItem ('seats', this.state.bookedSeats);
    console.log(localStorage.getItem('seats'));
  }

  render() {
    return (
      <div className="seat-plan-section padding-bottom padding-top">
        <div className="container">
          <div className="screen-area">
            <h4 className="screen">screen</h4>
            <div className="screen-thumb">
              <img src="/assets/images/movie/screen-thumb.png" alt="movie" />
            </div>
            <h5 className="subtitle">silver plus</h5>
            <div className="screen-wrapper">
              <ul className="seat-area">

                <li className="seat-line">
                  <span>h</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(8)}
                      </ul>

                    </li>
                  </ul>
                  <span>h</span>
                </li>
                <li className="seat-line">
                  <span>g</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(7)}
                      </ul>

                    </li>
                  </ul>
                  <span>g</span>
                </li>
                <li className="seat-line">
                  <span>f</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(6)}
                      </ul>

                    </li>
                  </ul>
                  <span>f</span>
                </li>
              </ul>
            </div>

            <div className="screen-wrapper">
              <ul className="seat-area">
                <li className="seat-line">
                  <span>e</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(5)}
                      </ul>

                    </li>
                  </ul>
                  <span>e</span>
                </li>
                <li className="seat-line">
                  <span>d</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(4)}
                      </ul>

                    </li>
                  </ul>
                  <span>d</span>
                </li>
                <li className="seat-line">
                  <span>c</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(3)}
                      </ul>

                    </li>
                  </ul>
                  <span>c</span>
                </li>
                <li className="seat-line">
                  <span>b</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(2)}
                      </ul>

                    </li>
                  </ul>
                  <span>b</span>
                </li>
                <li className="seat-line">
                  <span>a</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        {this.mappingData(1)}
                      </ul>

                    </li>
                  </ul>
                  <span>a</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="proceed-book bg_img"
            data-background="assets/images/movie/movie-bg-proceed.jpg"
          >
            <div className="proceed-to-book">
              <div className="book-item">
                <span>You have Choosed Seat</span>
                <h3 className="title">d9, d10</h3>
              </div>
              <div className="book-item">
                <span>total price</span>
                <h3 className="title">$150</h3>
              </div>
              <div className="book-item">
                <Link onClick={this.proceed()} to={"/choose-foods/" + this.state.showtimeId} className="custom-button">
                  proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
