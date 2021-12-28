import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

export default class PayPal extends Component {
    createOrder(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "0.01",
              },
            },
          ],
        });
      }
      onApprove(data, actions) {
        return actions.order.capture();
      }

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
            percentage: 0
          },
          cardId: "",
          fullName: "",
          expired: "",
          cvv: ""
        };
        console.log(this.props);
        // this.book = this.book.bind(this);
        // this.isInputChange = this.isInputChange(this);
      }

    isInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
      }

    
    render() {
        return (
            <div>
            <div>
            {/* <div className="checkout-widget checkout-card mb-0">
            <h5 className="title">Thông tin thanh toán </h5>
            <ul className="payment-option">
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
              <li>
                <a href="#0">
                  <img
                    src="/assets/images/payment/paypal.png"
                    alt="payment"
                  />
                  <span>paypal</span>
                </a>
              </li>
            </ul>
            <h6 className="subtitle">Điền thông tin chi tiết thẻ </h6>
            <form className="payment-card-form" 
            method="POST"
            >
              <div className="form-group w-100">
                <label htmlFor="card1">Số thẻ</label>
                <input type="password"
                value={this.state.cardId}
                onChange={e => this.isInputChange(e)}
                name="cardId"
                id="card1"
                />
                <div className="right-icon">
                  <i className="flaticon-lock" />
                </div>
              </div>
              <div className="form-group w-100">
                <label htmlFor="card2"> Họ và Tên trên thẻ </label>
                <input type="text" id="card2" 
                value={this.state.fullName}
                onChange={e => this.isInputChange(e)}
                name="fullName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="card3">Ngày hết hạn</label>
                <input type="text" id="card3" placeholder="  MM/YY" 
                 value={this.state.expired}
                 onChange={e => this.isInputChange(e)}
                 name="expired"
                 />
              </div>
              <div className="form-group">
                <label htmlFor="card4">Mã CVV / CVC</label>
                <input type="password" id="card4" placeholder="  CVV" 
                value={this.state.cvv}
                onChange={e => this.isInputChange(e)}
                name="cvv"
                />
              </div>
              <div className="form-group check-group">
                <input id="card5" type="checkbox" 
                required/>
                <label htmlFor="card5">
                  <span className="title">Xác nhận</span>
                  <span className="info">
                    Chắc rằng thông tin bạn vừa điền là chính xác. Thông tin email và số điện thoại có thể hỗ trợ bạn nếu cần.
                  </span>
                </label>
              </div>
              <div className="form-group">
                <input
                onClick={e => this.makePayment(e)}
                  type="submit"
                  className="custom-button"
                  value="Thanh toán"
                />
              </div>
            </form>
            <p className="notice">
              Đồng ý "Thanh Toán" cũng là bạn đồng ý với
              <a href="#0">các điều khoản và điều kiện</a>
            </p>
          </div> */}
          </div>

          <PayPalButton
        createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
      />
          </div>
        )
    }
}
