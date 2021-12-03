import React, { Component } from "react";

class AboutGallery extends React.Component {
  render() {
    return (
      <div>
        {/* ==========Gallery-Section========== */}
        <section className="gallery-section padding-top padding-bottom bg-one">
          <div className="container">
            <div className="section-header-3">
              <span className="cate">Take a look at our</span>
              <h2 className="title">A ticket for every fan.</h2>
              <p>
                World is committed to making participation in the event a
                harassment free experience for everyone, regardless of level of
                experience, gender, gender identity and expression
              </p>
            </div>
            <div className="row justify-content-center gallery-wrapper mb-30-none">
              <div className="col-lg-3 col-sm-6">
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href="assets/images/gallery/gallery05.jpg"
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src="assets/images/gallery/gallery05.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href="assets/images/gallery/gallery06.jpg"
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src="assets/images/gallery/gallery06.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href="assets/images/gallery/gallery07.jpg"
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src="assets/images/gallery/gallery07.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 order-lg-1">
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href="assets/images/gallery/gallery11.jpg"
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src="assets/images/gallery/gallery11.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href="assets/images/gallery/gallery12.jpg"
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src="assets/images/gallery/gallery12.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href="assets/images/gallery/gallery13.jpg"
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src="assets/images/gallery/gallery13.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-item two">
                  <div className="gallery-thumb">
                    <a
                      href="assets/images/gallery/gallery08.jpg"
                      className="img-pop"
                    >
                      <i className="flaticon-loupe" />
                    </a>
                    <img
                      src="assets/images/gallery/gallery08.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="gallery-item two">
                      <div className="gallery-thumb">
                        <a
                          href="assets/images/gallery/gallery09.jpg"
                          className="img-pop"
                        >
                          <i className="flaticon-loupe" />
                        </a>
                        <img
                          src="assets/images/gallery/gallery09.jpg"
                          alt="gallery"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="gallery-item two">
                      <div className="gallery-thumb">
                        <a
                          href="assets/images/gallery/gallery10.jpg"
                          className="img-pop"
                        >
                          <i className="flaticon-loupe" />
                        </a>
                        <img
                          src="assets/images/gallery/gallery10.jpg"
                          alt="gallery"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Gallery-Section========== */}
      </div>
    );
  }
}

export default AboutGallery;
