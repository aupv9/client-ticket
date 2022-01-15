import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo/logo.png" alt="logo" />
              </Link>
            </div>
            <ul className="menu">
              <li>
                <a href="#0">Event</a>
              </li>
              <li>
                <a href="#0">Contact</a>
                <ul className="submenu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="apps-download.html">Apps Download</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Blogs</a>
              </li>
              <li>
                <Link to="/user">Thông tin cá nhân</Link>
              </li>
              <li className="header-button pr-0">
                <Link to="/login">join us</Link>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
