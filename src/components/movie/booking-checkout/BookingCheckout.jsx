import React, { Component } from "react";

export default class BookingCheckout extends Component {
  render() {
    return (
      <div className="movie-facility padding-bottom padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-widget d-flex flex-wrap align-items-center justify-cotent-between">
                <div className="title-area">
                  <h5 className="title">Already a Boleto Member?</h5>
                  <p>Sign in to earn points and make booking easier!</p>
                </div>
                <a href="#0" className="sign-in-area">
                  <i className="fas fa-user" />
                  <span>Sign in</span>
                </a>
              </div>
              <div className="checkout-widget checkout-contact">
                <h5 className="title">Share your Contact Details </h5>
                <form className="checkout-contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Enter your Mail" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Enter your Phone Number " />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Continue"
                      className="custom-button"
                    />
                  </div>
                </form>
              </div>
              <div className="checkout-widget checkout-contact">
                <h5 className="title">Promo Code </h5>
                <form className="checkout-contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Please enter promo code" />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Verify"
                      className="custom-button"
                    />
                  </div>
                </form>
              </div>
              <div className="checkout-widget checkout-card mb-0">
                <h5 className="title">Payment Option </h5>
                <ul className="payment-option">
                  <li className="active">
                    <a href="#0">
                      <img src="assets/images/payment/card.png" alt="payment" />
                      <span>Credit Card</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="assets/images/payment/card.png" alt="payment" />
                      <span>Debit Card</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img
                        src="assets/images/payment/paypal.png"
                        alt="payment"
                      />
                      <span>paypal</span>
                    </a>
                  </li>
                </ul>
                <h6 className="subtitle">Enter Your Card Details </h6>
                <form className="payment-card-form">
                  <div className="form-group w-100">
                    <label htmlFor="card1">Card Details</label>
                    <input type="text" id="card1" />
                    <div className="right-icon">
                      <i className="flaticon-lock" />
                    </div>
                  </div>
                  <div className="form-group w-100">
                    <label htmlFor="card2"> Name on the Card</label>
                    <input type="text" id="card2" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card3">Expiration</label>
                    <input type="text" id="card3" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card4">CVV</label>
                    <input type="text" id="card4" placeholder="CVV" />
                  </div>
                  <div className="form-group check-group">
                    <input id="card5" type="checkbox" defaultChecked />
                    <label htmlFor="card5">
                      <span className="title">QuickPay</span>
                      <span className="info">
                        Save this card information to my Boleto account and make
                        faster payments.
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="custom-button"
                      defaultValue="make payment"
                    />
                  </div>
                </form>
                <p className="notice">
                  By Clicking "Make Payment" you agree to the{" "}
                  <a href="#0">terms and conditions</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="booking-summery bg-one">
                <h4 className="title">booking summery</h4>
                <ul>
                  <li>
                    <h6 className="subtitle">Venus</h6>
                    <span className="info">English-2d</span>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
