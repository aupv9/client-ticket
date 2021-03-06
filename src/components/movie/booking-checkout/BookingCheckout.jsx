import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import PromoService from "../../../services/PromoService";
import OfferService from "../../../services/OfferService";
import PromoPrice from "./PromoPrice";
import ChosenSeatList from "../booking-seat-plan/ChosenSeatList";
import OrderService from "../../../services/OrderService";
import PaymentService from "../../../services/PaymentService";
import PayPal from "./PayPal";

export default class BookingCheckout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
      showtime: {},
      movie: {},
      theater: {},
      concession: [],
      seats: [],
      user: {
        // name: "",
        // email: ""
      },
      userId: null,
      foodPrice: 0,
      ticketPrice: 0,
      isLogged: false,
      isRedirect: false,
      phone: "",
      firstName: "",
      lastName: "",
      email: "",
      promoCode: "",
      offer: {
        percentage: 0,
      },
      cardId: "",
      fullName: "",
      expired: "",
      cvv: "",
      order: {},
      orderId: null,
    };
    console.log(this.props);
    // this.book = this.book.bind(this);
    // this.isInputChange = this.isInputChange(this);
  }

  delay = (ms) => new Promise((res) => setTimeout(res, ms));

  completePayment = async () => {
    await this.delay(1000);
    // let d = new Date().toJSON().replace('T', ' ');
    // d = d.slice(0, d.length - 5);
    // let totalAmount = this.getTotalPrice() * (1 - this.state.offer.percentage) * 1.1;
    // let order = {
    //   totalAmount: parseInt(totalAmount),
    //   tax: this.getTotalPrice() * (1 - this.state.offer.percentage) * 0.1,
    //   showTimesDetailId: this.state.showtime.id,
    //   userId: this.state.userId,
    //   createDate: d,
    //   concessionId: this.state.concession,
    //   seats: this.state.seats,
    //   room: this.state.showtime.roomId,
    //   isOnline: true
    // }

    // OrderService.orderOnline(order).then(res => {
    //   console.log(res);
    // })

    localStorage.removeItem("phone");
    if (this.state.phone) {
      localStorage.setItem("phone", JSON.stringify(this.state.phone));
    }

    localStorage.removeItem("offer");
    if (this.state.offer.percentage !== 0) {
      localStorage.setItem("offer", JSON.stringify(this.state.offer));
    }

    localStorage.removeItem("order");
    if (this.state.order) {
      localStorage.setItem("order", JSON.stringify(this.state.order));
    }

    await this.delay(1000);

    this.setState({
      isRedirect: true,
    });
  };

  callbackFunctionPayPal = (paypalOrderId) => {
    // console.log("hoan thanh");
    // this.setState({isRedirect: true})

    // t???o object payment
    let payment = {
      numberMember: null,
      amount: this.state.order.totalAmount,
      status: "",
      paymentMethodId: 1,
      createdDate: this.state.order.createDate,
      updatedDate: "",
      note: "",
      transactionId: paypalOrderId.toString(),
      useFor: "Ticket",
      code: this.state.promoCode,
      partId: this.state.orderId,
      creation: 0,
      updatedBy: 0,
      userId: 0,
    };

    console.log(JSON.stringify(payment));

    PaymentService.addPayment(payment).then((res) => {
      console.log(res);
    });

    this.completePayment();
  };

  makePayment = (e) => {
    e.preventDefault();
    this.completePayment();
  };

  componentDidMount() {
    //   this.getPrice();
    // })
    for (let i = 0; i < localStorage.length; i++) {
      console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    // console.log(this.state.bookedSeats);
    this.setState({
      foods: JSON.parse(localStorage.foods),
      showtime: JSON.parse(localStorage.showtime),
      movie: JSON.parse(localStorage.movie),
      theater: JSON.parse(localStorage.theater),
      concession: JSON.parse(localStorage.concession),
      foodPrice: JSON.parse(localStorage.foodPrice),
      ticketPrice: JSON.parse(localStorage.ticketPrice),
      seats: JSON.parse(localStorage.seats),
      bookedSeats: JSON.parse(localStorage.bookedSeats),
      // user: JSON.parse(localStorage.user)
    });

    if (window.sessionStorage.getItem("user")) {
      console.log(window.sessionStorage.getItem("user"))
      let user = JSON.parse(window.sessionStorage.getItem("user"));
      this.setState({
        user: user,
        userId: user.id,
        firstName: user.fullName,
        lastName: user.lastName,
        email: user.email,
        phone: "01223695542",
        isLogged: true,
      });

      //t???o object order
      let d = new Date().toJSON().replace("T", " ");
      d = d.slice(0, d.length - 5);
      let totalAmount =
        this.getTotalPrice() * (1 - this.state.offer.percentage) * 1.1;
      let order = {
        totalAmount: parseInt(totalAmount),
        tax: this.getTotalPrice() * (1 - this.state.offer.percentage) * 0.1,
        showTimesDetailId: JSON.parse(localStorage.showtime).id,
        userId: user.id,
        createDate: d,
        note: "",
        typeUser: false,
        status: "",
        creation: null,
        concessionId: JSON.parse(localStorage.concession),
        seats: JSON.parse(localStorage.bookedSeats),
        room: JSON.parse(localStorage.showtime).roomId,
        isOnline: true,
      };

      console.log(order);
      // g???i api order
      OrderService.orderOnline(order).then((res) => {
        this.setState({
          orderId: res.data.id,
          order: res.data,
          // order: order
        });

        localStorage.setItem("order", JSON.stringify(res.data));

        console.log("show order: ");
        console.log(res.data);
      });

      // console.log(user);
    }
  }

  getNumOfTickets() {
    return this.state.seats.length;
  }

  formatCurrency(n) {
    let temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    return temp.slice(0, temp.length - 2) + " vnd";
  }

  getPrice() {
    let price = this.getNumOfTickets() * this.state.showtime.price;
    this.setState({
      ticketPrice: price,
    });
    return price;
  }

  getTime = () => {
    let time = new Date(this.state.showtime.timeStart);
    return time.getHours() + ":" + time.getMinutes();
  };

  getDate = () => {
    let time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").fromNow();
  };

  getDate2 = () => {
    let time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").calendar();
  };

  getDetailDay = () => {
    let time = new Date(this.state.showtime.timeStart);
    console.log(time);
    return (
      moment(time, "YYYY-MM-DD HH:mm:ss").format("dddd") +
      " - " +
      this.getTime() +
      " - " +
      this.getDate2()
    );
  };

  getFoodsPrice() {
    if (this.state.concession) {
      let sum = this.state.concession.reduce((price, foodId) => {
        let food = this.state.foods.find((food) => food.id === foodId);
        return (price += food.price);
      }, 0);

      return sum;
    }
  }

  getTotalPrice() {
    return (
      parseInt(JSON.parse(localStorage.foodPrice)) +
      // this.getFoodsPrice()
      parseInt(JSON.parse(localStorage.ticketPrice))
    );
  }

  mappingChosenFoodsData() {
    if (this.state.concession) {
      let list = this.state.concession.map((foodId, i) => {
        let food = this.state.foods.find((food) => food.id === foodId);

        return (
          <span className="info" key={i}>
            <span>{food.name}</span>
            <span>{this.formatCurrency(food.price)}</span>
          </span>
        );
      });

      return list;
    }
  }

  // proceedButton() {
  //   if (!this.state.isLogged && this.state.isRedirect) {
  //     alert("Need to login!");
  //     return (
  //       <Redirect to="/login?action=checkout" className="custom-button back-button">
  //         proceed
  //       </Redirect>
  //     )
  //   }
  //   return (
  //     <a href="true" onClick={this.book} className="custom-button back-button">
  //       proceed
  //     </a>
  //   )
  // }

  loginWidget = () => {
    // console.log(this.state.user);
    if (!this.state.isLogged)
      return (
        <div className="checkout-widget d-flex flex-wrap align-items-center justify-cotent-between">
          <div className="title-area">
            <h5 className="title">B???n ???? c?? t??i kho???n</h5>
            <p>????ng nh???p ????? t??ch tr??? ??i???m v?? gi??p ?????t v?? d??? h??n!</p>
          </div>
          <Link to="/login?action=checkout" className="sign-in-area">
            <i className="fas fa-user" />
            <span>Login</span>
          </Link>
        </div>
      );
    // return (
    //   <div className="checkout-widget d-flex flex-wrap align-items-center justify-cotent-between">
    //     <div className="title-area">
    //       <h5 className="title">{this.state.user.name}</h5>
    //       <p>{this.state.user.email}</p>
    //     </div>
    //   </div>
    // )
  };

  isInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  verifyPromoCode(e) {
    e.preventDefault();
    console.log(this.state.promoCode);
    PromoService.verifyPromoCode(
      this.state.promoCode,
      this.state.movie.id
    ).then((res) => {
      console.log(res.data);
      if (res.data) {
        OfferService.getOfferById(res.data.id).then((res) => {
          localStorage.setItem("offer", JSON.stringify(res.data[0]));
          this.setState({
            offer: res.data[0],
          });

          // update total amount and tax
          // create order object
          let totalAmount =
            this.getTotalPrice() * (1 - res.data[0].percentage) * 1.1;
          let newData = {
            totalAmount: totalAmount,
            tax: totalAmount * 0.1,
          };
          let order = { ...this.state.order, ...newData };

          OrderService.updateOrder(order).then((res) => {
            console.log(res.data)
            this.setState({
              orderId: res.data.id,
              order: res.data,
              // order: order
            });

            localStorage.setItem("order", JSON.stringify(res.data));
          });
        });
      } else {
        alert("M?? gi???m gi?? kh??ng h???p l???.\nVui l??ng th??? l???i!\n C???m ??n");
        return;
      }
    });
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect push to="/book-result" />;
    }

    return (
      <div className="movie-facility padding-bottom padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {this.loginWidget()}
              <div className="checkout-widget checkout-contact">
                <h5 className="title">Th??ng tin li??n h??? </h5>
                <form className="checkout-contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="H??? "
                      value={this.state.firstName}
                      onChange={(e) => this.isInputChange(e)}
                      name="firstName"
                      id="firstName"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="T??n "
                      value={this.state.lastName}
                      onChange={(e) => this.isInputChange(e)}
                      name="lastName"
                      id="lastName"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email "
                      value={this.state.email}
                      onChange={(e) => this.isInputChange(e)}
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      placeholder="S??? ??i???n tho???i "
                      value={this.state.phone}
                      onChange={(e) => this.isInputChange(e)}
                      name="phone"
                      id="phone"
                      // required
                      //  pattern="/((09|03|07|08|05)+([0-9]{8})\b)/g"
                    />
                  </div>
                  {/* <div className="form-group">
                    <input
                      type="submit"
                      value="Ti???p t???c"
                      className="custom-button"
                    />
                  </div> */}
                </form>
              </div>
              <div className="checkout-widget checkout-contact">
                <h5 className="title">M?? khuy???n m??i </h5>
                <form className="checkout-contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Vui l??ng nh???p m?? khuy???n m??i"
                      id="promoCode"
                      onChange={(e) => this.isInputChange(e)}
                      name="promoCode"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="X??c minh"
                      className="custom-button"
                      onClick={(e) => this.verifyPromoCode(e)}
                    />
                  </div>
                </form>
              </div>
              <div className="checkout-widget checkout-card mb-0">
                <h5 className="title">Th??ng tin thanh to??n </h5>
                <ul className="payment-option">
                  <li className="active">
                    {/* <a href="#0"> */}
                    <PayPal
                      order={this.state.order}
                      parentCallback={this.callbackFunctionPayPal}
                    >
                      {/* <img
                          src="/assets/images/payment/paypal.png"
                          alt="payment"
                        /> */}
                      {/* <span>paypal</span> */}
                    </PayPal>
                    {/* </a> */}
                  </li>
                </ul>
                {/* <ul className="payment-option">
                  <li className="active">
                    <a href="#0">
                      <img src="/assets/images/payment/card.png" alt="payment" />
                      <span>Credit Card</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="/assets/images/payment/card.png" alt="payment" />
                      <span>Debit Card</span>
                    </a>
                  </li>
                </ul> */}
                <h6 className="subtitle">??i???n th??ng tin chi ti???t th??? </h6>
                <form className="payment-card-form" method="POST">
                  <div className="form-group w-100">
                    <label htmlFor="card1">S??? th???</label>
                    <input
                      type="password"
                      value={this.state.cardId}
                      onChange={(e) => this.isInputChange(e)}
                      name="cardId"
                      id="card1"
                    />
                    <div className="right-icon">
                      <i className="flaticon-lock" />
                    </div>
                  </div>
                  <div className="form-group w-100">
                    <label htmlFor="card2"> H??? v?? T??n tr??n th??? </label>
                    <input
                      type="text"
                      id="card2"
                      value={this.state.fullName}
                      onChange={(e) => this.isInputChange(e)}
                      name="fullName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card3">Ng??y h???t h???n</label>
                    <input
                      type="text"
                      id="card3"
                      placeholder="  MM/YY"
                      value={this.state.expired}
                      onChange={(e) => this.isInputChange(e)}
                      name="expired"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card4">M?? CVV / CVC</label>
                    <input
                      type="password"
                      id="card4"
                      placeholder="  CVV"
                      value={this.state.cvv}
                      onChange={(e) => this.isInputChange(e)}
                      name="cvv"
                    />
                  </div>
                  <div className="form-group check-group">
                    <input id="card5" type="checkbox" required />
                    <label htmlFor="card5">
                      <span className="title">X??c nh???n</span>
                      <span className="info">
                        Ch???c r???ng th??ng tin b???n v???a ??i???n l?? ch??nh x??c. Th??ng tin
                        email v?? s??? ??i???n tho???i c?? th??? h??? tr??? b???n n???u c???n.
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      onClick={(e) => this.makePayment(e)}
                      type="submit"
                      className="custom-button"
                      value="Thanh to??n"
                    />
                  </div>
                </form>
                <p className="notice">
                  ?????ng ?? "Thanh To??n" c??ng l?? b???n ?????ng ?? v???i
                  <a href="#0">c??c ??i???u kho???n v?? ??i???u ki???n</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="booking-summery bg-one">
                <h4 className="title">T??m t???t</h4>
                <ul>
                  <li>
                    <h6 className="subtitle">
                      {this.state.movie.name}{" "}
                      <span>{this.getNumOfTickets() + " v??"}</span>
                    </h6>
                    <div className="info">
                      <span> Ti???ng Vi???t - 2D</span>
                      <span>
                        <ChosenSeatList bookedSeats={this.state.seats} />{" "}
                      </span>
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
                <ul>
                  <PromoPrice
                    price={this.getTotalPrice()}
                    percentage={this.state.offer.percentage}
                  />
                </ul>
              </div>
              <div className="note">
                <h5 className="title">Ghi ch??: </h5>
                <p>
                  Vui l??ng cung c???p cho ch??ng t??i kho???ng 15 ph??t ????? chu???n b???
                  F&amp;B khi b???n t???i r???p
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
