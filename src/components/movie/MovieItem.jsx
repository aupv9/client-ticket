import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MovieItem extends Component {
  to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };

  render() {
    return (
      <div>
        <div className="item">
          <div className="movie-grid">
            <div className="movie-thumb c-thumb">
              <Link
                to={
                  "movie-detail/" +
                  this.props.movie.id +
                  "/" +
                  this.to_slug(this.props.movie.name)
                }
              >
                <img
                  // src="/assets/images/movie/movie01.jpg"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/movie/" +
                    this.props.movie.thumbnail
                  }
                  alt="movie"
                />
              </Link>
            </div>
            <div className="movie-content bg-one">
              <h5 className="title m-0">
                <Link
                  to={
                    "movie-detail/" +
                    this.props.movie.id +
                    "/" +
                    this.to_slug(this.props.movie.name)
                  }
                >
                  {this.props.movie.name}
                </Link>
              </h5>
              <ul className="movie-rating-percent">
                <li>
                  <div className="thumb">
                    <img src="/assets/images/movie/tomato.png" alt="movie" />
                  </div>
                  <span className="content">
                    {this.props.movie.duration_min + " min"}
                  </span>
                </li>
                <li>
                  <div className="thumb">
                    <img src="/assets/images/movie/cake.png" alt="movie" />
                  </div>
                  <span className="content">{this.props.movie.genre}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
