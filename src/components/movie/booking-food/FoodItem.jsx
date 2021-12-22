import React, { Component } from 'react'

export default class FoodItem extends Component {
  formatCurrency(n) {
    var temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return temp.slice(0, temp.length - 2) + ' vnd';
  }

  render() {
    return (
      <div className="grid-item combos popcorn bevarage">
        <div className="grid-inner">
          <div className="grid-thumb">
            <img
              src={"/assets/images/movie/popcorn/" + this.props.food.thumbnail}
              alt="movie/popcorn"
            />
            <div className="offer-tag">{this.formatCurrency(this.props.food.price)}</div>
            <div className="offer-remainder">
              <h6 className="o-title mt-0">24%</h6>
              <span>off</span>
            </div>
          </div>
          <div className="grid-content">
            <h5 className="subtitle">
              <a href="#0">{this.props.food.name}</a>
            </h5>
            <form className="cart-button">
              <div className="cart-plus-minus">
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  name="qtybutton"
                  defaultValue={1}
                />
              </div>
              <button type="submit" className="custom-button">
                add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
