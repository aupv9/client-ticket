import React, { Component } from "react";
import MovieService from "../../services/MovieService";
import ShowtimeService from "../../services/ShowtimeService";
import ChosenSeatList from "../movie/booking-seat-plan/ChosenSeatList.jsx";
import "./MovieOrderItem.css";
import { formatWithOptions } from "date-fns/fp";
import { vi } from "date-fns/locale";
import { parseJSON } from "date-fns";

export default class MovieOrderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showtime: {
        theater: {
          name: "",
          locationName: "",
        },
      },
      movie: {
        thumbnail: "",
      },
    };
  }

  componentDidMount = () => {
    // get showtime
    ShowtimeService.getShowTimeById(
      1
      // this.props.order.showTimesDetailId
    ).then((res) => {
      console.log(res.data);
      this.setState({
        showtime: res.data,
      });
      MovieService.getMovieById(res.data.movieId).then((res) => {
        this.setState({
          movie: res.data,
        });
      });
    });
  };

  mappingFoodData() {
    //   console.log(this.props.order.concessionId);
    //   console.log(this.props.foods);
    if (this.props.order.concessionId && this.props.foods) {
      const occurrences = this.props.order.concessionId.reduce(
        (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
        {}
      );
      console.log(occurrences);
      const foodIds = Object.getOwnPropertyNames(occurrences);
      console.log(foodIds);
      var foodArray = foodIds.map((foodId, i) => {
        //  Object.getOwnPropertyNames(occurrences).
        var food = this.props.foods.find(
          (food) => food.id === parseInt(foodId)
        );
        // console.log(food);
        let name = "";
        if (food) name = food.name;

        let quantity = occurrences[foodId];
        return (
          <li key={i}>
            <a href="#0">- {name}</a>
            <span>&#160;*{quantity}</span>
          </li>
        );
      });

      return foodArray;
    }
  }

  formatCurrency(n) {
    var temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    return temp.slice(0, temp.length - 2) + " vnd";
  }

  dateToString = formatWithOptions({ locale: vi }, "HH:mm dd-MM-yyyy");

  getDate = (date) => {
    return this.dateToString(parseJSON(date));
  };

  render() {
    return (
      <div className="movie-list">
        <div className="movie-thumb c-thumb">
          <a
            href="movie-details.html"
            className="w-100 bg_img h-100"
            data-background={this.state.movie.thumbnail}
            style={{
              backgroundImage: `url("${this.state.movie.thumbnail}")`,
            }}
          >
            <img
              className="d-sm-none"
              src={this.state.movie.thumbnail}
              alt="movie"
            />
          </a>
        </div>
        <div className="movie-content bg-one">
          <h3 className="title">
            <div>alone</div>
          </h3>
          {/* <p className="duration">2hrs 50 min</p> */}
          {/* <div className="movie-tags">
            <a href="#0">action</a>
            <a href="#0">adventure</a>
            <a href="#0">fantasy</a>
          </div> */}
          <div className="thumb">
            <span>Đặt vé lúc </span>
            <a href="#0"> {this.getDate(this.props.order.createdDate)}</a>
          </div>
          <div className="release">
            <span></span>
            <a href="#0">
              {this.state.showtime.theater.name +
                ", " +
                this.state.showtime.theater.locationName}
            </a>
          </div>
          <ul className="movie-rating-percent">
            <li>
              <div className="thumb">
                <img src="/assets/images/icons/book.png" alt="icons" />

                <span>&#160;Ghế đã đặt :&#160;</span>
                <ChosenSeatList bookedSeats={this.props.order.seats} />
              </div>
            </li>
            <li>
              <div className="thumb">
                <img src="/assets/images/movie/cake.png" alt="movie" />
              </div>
              <span>&#160;Thức ăn và đồ uống đã đặt</span>
            </li>
            {/* <li>
              <a href="#0">action</a>
              <span>&#160;Thức ăn và đồ uống đã đặt</span>
            </li> */}
            {this.mappingFoodData()}
          </ul>

          <div className="book-area">
            <div className="book-ticket">
              {/* <div className="react-item">
                <a href="#0">
                  <div className="thumb">
                    <img src="/assets/images/icons/heart.png" alt="icons" />
                  </div>
                </a>
              </div> */}
              <div className="react-item mr-auto">
                <a href="#0">
                  <div className="thumb">
                    <img src="/assets/images/icons/book.png" alt="icons" />
                  </div>
                  <span>
                    Tổng tiền: {this.formatCurrency(this.props.order.total)}
                  </span>
                </a>
              </div>
              {/* <div className="react-item">
                <a href="#0" className="popup-video">
                  <div className="thumb">
                    <img
                      src="/assets/images/icons/play-button.png"
                      alt="icons"
                    />
                  </div>
                  <span>watch trailer</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
