import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <section className="banner-section">
          <div
            className="banner-bg bg_img bg-fixed"
            style={{ backgroundImage: `url("${"/assets/images/banner/banner01.jpg"}")` }}
            data-background=
            // { process.env.PUBLIC_URL +
              "/assets/images/banner/banner01.jpg"
            // }
          />
          <div className="container">
            <div className="banner-content">
              <h1 className="title  cd-headline clip">
                <span className="d-block">Đặt vé xem phim</span> tại&nbsp;
                <span className="color-theme cd-words-wrapper p-0 m-0">
                  <b className="is-visible">Boleto</b>
                </span>
              </h1>
              <p>
              Đặt vé an toàn, bảo mật, đáng tin cậy.
              </p>
              <p>
              Vé xem phim để giải trí cuộc sống!
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
