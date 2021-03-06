import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodService from "../../../services/FoodService";
import MovieService from "../../../services/MovieService";
import TheaterService from "../../../services/TheaterService";
import FoodItem from "./FoodItem";
import moment from 'moment';
import 'moment/locale/vi'
import ChosenSeatList from "../booking-seat-plan/ChosenSeatList";
import ShowtimeService from "../../../services/ShowtimeService";

export default class BookingFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      foods: [],
      showtime: {},
      movie: {},
      theater: {},
      concession: [],
      foodPrice: 0,
      ticketPrice: 0,
      bookedSeats: []
    };
    console.log(this.props);
  }

  componentDidMount() {
    console.log(localStorage.getItem('ticketPrice'))

    // let ticketPrice = 0;
    // let seatPrices =  JSON.parse(localStorage.getItem('seatPrices'));
    // seatPrices.forEach(price => ticketPrice+= price)
    this.setState({
      bookedSeats: JSON.parse(localStorage.getItem('seats')),
      ticketPrice: localStorage.getItem('ticketPrice'),
    }, () => console.log(this.state.ticketPrice))

    FoodService.getFoods().then((res) => {
      console.log(res.data);
      this.setState({ foods: res.data.content });
    })

    ShowtimeService.getShowTimeById(this.state.id).then((res) => {
      this.setState({ showtime: res.data });

      MovieService.getMovieById(res.data.movieId).then((res) => {
        this.setState({ movie: res.data });
      })

      TheaterService.getTheaterById(res.data.theaterId).then((res) => {
        this.setState({ theater: res.data });
      })


    })
  }

  handleCallback = (foodId, quantity) => {
    let temp = this.state.concession.filter(e => e !== foodId)

    let addedArr = [];
    addedArr.length = quantity;
    addedArr.fill(foodId);
    temp = temp.concat(addedArr);
    console.log(temp);
    this.setState({
      concession: temp
    })
  }


  mappingData() {
    if (this.state.foods) {
      let data = this.state.foods;
      let foodList = data.map((item, i) => {
        return (
          <FoodItem parentCallback={this.handleCallback} key={i} food={item}></FoodItem>
        )
      })
      return foodList;
    }
  }

  getNumOfTickets() {
    console.log(JSON.parse(localStorage.getItem('seats')));
    return JSON.parse(localStorage.getItem('seats')).length;
  }

  formatCurrency(n) {
    if (n===0) return " ";
    console.log(n);
    let temp = parseInt(n).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return temp.slice(0, temp.length - 2) + ' vnd';
    // return "";
  }

  getTime = () => {
    let time = new Date(this.state.showtime.timeStart);
    return time.getHours() + ":" + time.getMinutes();
  }

  getDate = () => {
    let time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").fromNow();
  }

  getDate2 = () => {
    let time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").calendar();
  }

  getDetailDay = () => {
    let time = new Date(this.state.showtime.timeStart);
    console.log(time);
    return moment(time, "YYYY-MM-DD HH:mm:ss").format('dddd') + ' - ' + this.getTime() + ' - ' + this.getDate2();
  }

  mappingChosenFoodsData() {
    if (this.state.concession) {

      let list = this.state.concession.map((foodId, i) => {
        let food = this.state.foods.find(food => food.id === foodId);

        return (
          <span className="info" key={i}>
            <span>{food.name}</span>
            <span>{this.formatCurrency(food.price)}</span>
          </span>
        )
      })

      return list;
    }
  }

  getFoodsPrice() {
    if (this.state.concession) {
      let sum = this.state.concession.reduce((price, foodId) => {
        let food = this.state.foods.find(food => food.id === foodId);
        return price += food.price;
      }, 0)

      return sum;
    }
  }

  getTotalPrice() {
    return parseInt(this.getFoodsPrice()) + parseInt(this.state.ticketPrice);
  }

  checkout(e) {
    if (this.state.bookedSeats) {
      // console.log(this.state.bookedSeats);
      localStorage.removeItem('foods');
      localStorage.setItem('foods', JSON.stringify(this.state.foods));

      localStorage.removeItem('showtime');
      localStorage.setItem('showtime', JSON.stringify(this.state.showtime));

      localStorage.removeItem('movie');
      localStorage.setItem('movie', JSON.stringify(this.state.movie));

      localStorage.removeItem('theater');
      localStorage.setItem('theater', JSON.stringify(this.state.theater));

      localStorage.removeItem('concession');
      localStorage.setItem('concession', JSON.stringify(this.state.concession));

      localStorage.removeItem('foodPrice');
      localStorage.setItem('foodPrice', JSON.stringify(this.getFoodsPrice()));

      // console.log(JSON.parse(localStorage.getItem('seats')));
    }
  }

  render() {
    console.log(this.state);
    return (
     this.state.foods &&
         <div>
          <div className="movie-facility padding-bottom padding-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="section-header-3">
                    <span className="cate">B???n c???m th???y ????i</span>
                    <h2 className="title">Ch??ng t??i c?? th???c ??n v?? ????? u???ng</h2>
                    <p>?????t tr?????c ????? ??n v?? th???c u???ng ????? ???????c gi???m gi??!</p>
                  </div>
                  <div style={{ zIndex: 1 }} className="grid--area">
                    <div className="grid-area">
                      {this.mappingData()}
                    </div>
                  </div>
                </div>
                {/*tom tat*/}
                <div className="col-lg-4">
                  <div className="booking-summery bg-one">
                    <h4 className="title">T??m t???t </h4>
                    <ul>
                      <li>
                        <h6 className="subtitle">{this.state.movie.name} <span>{this.getNumOfTickets() + ' v??'}</span></h6>
                        <div className="info">
                          <span> Ti???ng Vi???t - 2D</span>
                          <span><ChosenSeatList bookedSeats={this.state.bookedSeats} />  </span>
                        </div>
                      </li>
                      <li>
                        <h6 className="subtitle">
                          <span>{this.state.theater.name}</span>
                          <span>{this.state.showtime.roomName}</span>
                        </h6>
                        <div className="info">
                          <span>{this.state.theater.locationName}</span>
                        </div>
                      </li>

                      <li>
                        <h6 className="subtitle mb-0">
                          <span>Su???t chi???u:</span>
                          <span>{this.getDetailDay()}</span>
                        </h6>
                        <div className="info">
                          <span></span>
                          <span>{this.getDate()}</span>
                        </div>
                      </li>

                      <li>
                        <h6 className="subtitle mb-0">
                          <span>T???ng gi?? v??</span>
                          <span>{this.formatCurrency(this.state.ticketPrice)}</span>
                        </h6>
                      </li>
                    </ul>
                    <ul className="side-shape">

                      <li>
                        <h6 className="subtitle">
                          <span>Th???c ??n &amp; ????? u???ng</span>
                        </h6>
                        {/* <span className="info">
                      <span>2 Nachos Combo</span>
                      <span>$57</span>
                    </span>
                    <span className="info">
                      <span>2 Nachos Combo</span>
                      <span>$57</span>
                    </span>
                    <span className="info">
                      <span>2 Nachos Combo</span>
                      <span>$57</span>
                    </span> */}
                        {this.mappingChosenFoodsData()}

                      </li>
                      <li>
                        <h6 className="subtitle mb-0">
                          <span>T???ng gi??</span>
                          <span>{this.formatCurrency(this.getFoodsPrice())}</span>
                        </h6>
                      </li>
                    </ul>
                    {/* <ul>
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
                </ul> */}
                  </div>
                  <div className="proceed-area  text-center">
                    <h6 className="subtitle">
                      <span>Chi ph?? ?????c t??nh</span>
                      <span>{this.formatCurrency(this.getTotalPrice())}</span>
                    </h6>
                    <Link onClick={e => this.checkout(e)} to="/checkout" className="custom-button back-button">
                      Ti???p t???c
                    </Link>
                  </div>

                  <div className="note">
                    <h5 className="title">Ghi ch??: </h5>
                    <p>
                      Vui l??ng cung c???p cho ch??ng t??i kho???ng 15 ph??t ????? chu???n b??? F&amp;B khi b???n t???i r???p
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
    );
  }
}
