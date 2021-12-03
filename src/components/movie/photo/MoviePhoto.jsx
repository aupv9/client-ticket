import React, { Component } from "react";
import MoviePhotoItem from "./MoviePhotoItem";

export default class MoviePhoto extends Component {

  mappingData = () => {
    if (this.props.photo_urls) {
      var photoList = this.props.photo_urls.map((item, i) => {
        return <MoviePhotoItem key={i}>{item}</MoviePhotoItem>;
      });

      return photoList;
    }
  };

  render() {
    return (
      <div>
        <h3 className="title">photos</h3>
        <div className="details-photos owl-carousel">
          {this.mappingData()}
      
          <div>
            {/* <div className="thumb">
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/images/movie/movie-details03.jpg"
              }
              className="img-pop"
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/movie/movie-details03.jpg"
                }
                alt="movie"
              />
            </a>
          </div>
          <div className="thumb">
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/images/movie/movie-details01.jpg"
              }
              className="img-pop"
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/movie/movie-details01.jpg"
                }
                alt="movie"
              />
            </a>
          </div>
          <div className="thumb">
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/images/movie/movie-details02.jpg"
              }
              className="img-pop"
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/movie/movie-details02.jpg"
                }
                alt="movie"
              />
            </a>
          </div>
          <div className="thumb">
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/images/movie/movie-details03.jpg"
              }
              className="img-pop"
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/movie/movie-details03.jpg"
                }
                alt="movie"
              />
            </a>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}
