import React, { Component } from 'react'

export default class MoviePhotoItem extends Component {
    render() {
        return (
            <div className="thumb">
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/images/movie/" +
                this.props.children
              }
              className="img-pop"
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/movie/" +
                  this.props.children
                }
                alt="movie"
              />
            </a>
          </div>
        )
    }
}
