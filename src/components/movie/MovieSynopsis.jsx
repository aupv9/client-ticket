import React, { Component } from 'react'

export default class MovieSynopsis extends Component {
  render() {
    return (
      <div className="item">
        <h5 className="sub-title">Synopsis</h5>

        <p>{this.props.children}</p>
      </div>
    )
  }
}
