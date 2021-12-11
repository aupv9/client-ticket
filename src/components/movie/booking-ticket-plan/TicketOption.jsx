import React, { Component } from "react";

export default class TicketOption extends Component {
  render() {
    return (
      <div className="ticket-plan-section padding-bottom padding-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-5 mb-lg-0">
              <ul className="seat-plan-wrapper bg-five">
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      Genesis Cinema
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      the beach
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li className="active">
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      city work
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item active">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      box park
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      la mer
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      wanted
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img
                      src="assets/images/sidebar/banner/banner03.jpg"
                      alt="banner"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
