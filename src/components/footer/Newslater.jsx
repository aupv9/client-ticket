import React from 'react';

class Newslater extends React.Component {
  render() {
    return (
      <div>
        <div className="newslater-section padding-bottom">
          <div className="container">
            <div
              className="newslater-container bg_img"
              data-background="assets/images/newslater/newslater-bg01.jpg"
            >
              <div className="newslater-wrapper">
                <h5 className="cate">subscribe to Boleto </h5>
                <h3 className="title">to get exclusive benifits</h3>
                <form className="newslater-form">
                  <input type="text" placeholder="Your Email Address" />
                  <button type="submit">subscribe</button>
                </form>
                <p>We respect your privacy, so we never share your info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newslater;
