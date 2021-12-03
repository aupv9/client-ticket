import React from "react";

export default function BookMovieDetail() {
  return (
    <div>
      <section className="book-section bg-one">
        <div className="container">
          <div className="book-wrapper offset-lg-3">
            <div className="left-side">
              <div className="item">
                <div className="item-header">
                  <div className="thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/movie/tomato2.png"
                      }
                      alt="movie"
                    />
                  </div>
                  <div className="counter-area">
                    <span
                      className="counter-item odometer"
                      data-odometer-final={88}
                    >
                      0
                    </span>
                  </div>
                </div>
                <p>tomatometer</p>
              </div>
              <div className="item">
                <div className="item-header">
                  <div className="thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/movie/cake2.png"
                      }
                      alt="movie"
                    />
                  </div>
                  <div className="counter-area">
                    <span
                      className="counter-item odometer"
                      data-odometer-final={88}
                    >
                      0
                    </span>
                  </div>
                </div>
                <p>audience Score</p>
              </div>
              <div className="item">
                <div className="item-header">
                  <h5 className="title">4.5</h5>
                  <div className="rated">
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                  </div>
                </div>
                <p>Users Rating</p>
              </div>
              <div className="item">
                <div className="item-header">
                  <div className="rated rate-it">
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                    <i className="fas fa-heart" />
                  </div>
                  <h5 className="title">0.0</h5>
                </div>
                <p>
                  <a href="#0">Rate It</a>
                </p>
              </div>
            </div>
            <a href="#0" className="custom-button">
              book tickets
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
