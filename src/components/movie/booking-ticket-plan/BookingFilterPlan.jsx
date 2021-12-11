import React, { Component } from "react";

export default class BookingFilterPlan extends Component {
  render() {
    return (
      <section className="book-section bg-one">
        <div className="container">
          <form className="ticket-search-form two">
            <div className="form-group">
              <div className="thumb">
                <img src="assets/images/ticket/city.png" alt="ticket" />
              </div>
              <span className="type">city</span>
              <select className="select-bar">
                <option value="london">London</option>
                <option value="dhaka">dhaka</option>
                <option value="rosario">rosario</option>
                <option value="madrid">madrid</option>
                <option value="koltaka">kolkata</option>
                <option value="rome">rome</option>
                <option value="khoksa">khoksa</option>
              </select>
            </div>
            <div className="form-group">
              <div className="thumb">
                <img src="assets/images/ticket/date.png" alt="ticket" />
              </div>
              <span className="type">date</span>
              <select className="select-bar">
                <option value="26-12-19">23/10/2020</option>
                <option value="26-12-19">24/10/2020</option>
                <option value="26-12-19">25/10/2020</option>
                <option value="26-12-19">26/10/2020</option>
              </select>
            </div>
            <div className="form-group">
              <div className="thumb">
                <img src="assets/images/ticket/cinema.png" alt="ticket" />
              </div>
              <span className="type">cinema</span>
              <select className="select-bar">
                <option value="Awaken">Awaken</option>
                <option value="Venus">Venus</option>
                <option value="wanted">wanted</option>
                <option value="joker">joker</option>
                <option value="fid">fid</option>
                <option value="kidio">kidio</option>
                <option value="mottus">mottus</option>
              </select>
            </div>
            <div className="form-group">
              <div className="thumb">
                <img src="assets/images/ticket/exp.png" alt="ticket" />
              </div>
              <span className="type">Experience</span>
              <select className="select-bar">
                <option value="English-2D">English-2D</option>
                <option value="English-3D">English-3D</option>
                <option value="Hindi-2D">Hindi-2D</option>
                <option value="Hindi-3D">Hindi-3D</option>
                <option value="Telegu-2D">Telegu-2D</option>
                <option value="Telegu-3D">Telegu-3D</option>
              </select>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
