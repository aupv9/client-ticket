import React, { Component } from "react";
import FoolService from "../../../services/FoolService";
import MovieService from "../../../services/MovieService";
import ShowtimeService from "../../../services/ShowtimeService";
import FoodItem from "./FoodItem";

export default class BookingFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      foods: [],
      showTimes: {},
      movie: {}
    };
    console.log(this.props);
  }

  componentDidMount() {
    FoolService.getFoods().then((res) => {
      this.setState({ foods: res.data });
    })

    ShowtimeService.getShowTimeById(this.state.id).then((res) => {
      this.setState({ showTimes: res.data });

      MovieService.getMovieById(res.data.movieId).then((res) => {
        this.setState({ movie: res.data });
      })
    })
  }

  mappingData() {
    if (this.state.foods) {
      var foodList = this.state.foods.map((item, i) => {
        return (
          <FoodItem key={i} food={item}></FoodItem>
        )
      })
      return foodList;
    }
  }


  render() {
    return (
      <div className="movie-facility padding-bottom padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-header-3">
                <span className="cate">You're hungry</span>
                <h2 className="title">we have food</h2>
                <p>Prebook Your Meal and Save More!</p>
              </div>
              <div className="grid--area">
                <div className="grid-area">
                  {this.mappingData()}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="booking-summery bg-one">
                <h4 className="title">booking summery</h4>
                <ul>
                  <li>
                    <h6 className="subtitle">{this.movie.name}</h6>
                    <span className="info">Tiếng Việt - 2D</span>
                  </li>
                  <li>
                    <h6 className="subtitle">
                      <span>City Walk</span>
                      <span>02</span>
                    </h6>
                    <div className="info">
                      <span>10 SEP TUE, 11:00 PM</span> <span>Tickets</span>
                    </div>
                  </li>
                  <li>
                    <h6 className="subtitle mb-0">
                      <span>Tickets Price</span>
                      <span>$150</span>
                    </h6>
                  </li>
                </ul>
                <ul className="side-shape">
                  <li>
                    <h6 className="subtitle">
                      <span>combos</span>
                      <span>$57</span>
                    </h6>
                    <span className="info">
                      <span>2 Nachos Combo</span>
                    </span>
                  </li>
                  <li>
                    <h6 className="subtitle">
                      <span>food &amp; bevarage</span>
                    </h6>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="info">
                      <span>price</span>
                      <span>$207</span>
                    </span>
                    <span className="info">
                      <span>vat</span>
                      <span>$15</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="proceed-area  text-center">
                <h6 className="subtitle">
                  <span>Amount Payable</span>
                  <span>$222</span>
                </h6>
                <a href="#0" className="custom-button back-button">
                  proceed
                </a>
              </div>
              <div className="note">
                <h5 className="title">Note :</h5>
                <p>
                  Please give us 15 minutes for F&amp; B preparation once you're
                  at the cinema
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
