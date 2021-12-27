import React, { Component } from 'react'

export default class TotalPrice extends Component {
    formatCurrency(n) {
        var temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        return temp.slice(0, temp.length - 2) + ' vnd';
      }

    render() {
        return (
            <div className="book-item">
                <span>total price</span>
                <h3 className="title">{this.formatCurrency(this.props.price)}</h3>
              </div>
        )
    }
}
