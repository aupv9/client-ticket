import React, { Component } from "react";

export default class TimeFilterSeatPlan extends Component {
  render() {
    return (
      <section className="page-title bg-one">
        <div className="container">
          <div className="page-title-area">
            <div className="item md-order-1">
              <a
                href="movie-ticket-plan.html"
                className="custom-button back-button"
              >
                <i className="flaticon-double-right-arrows-angles" />
                back
              </a>
            </div>
            <div className="item date-item">
              <span className="date">MON, SEP 09 2020</span>
              <select className="select-bar">
                <option value="sc1">09:40</option>
                <option value="sc2">13:45</option>
                <option value="sc3">15:45</option>
                <option value="sc4">19:50</option>
              </select>
            </div>
            <div className="item">
              <h5 className="title">05:00</h5>
              <p>Mins Left</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
