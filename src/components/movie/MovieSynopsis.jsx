import React, { Component } from 'react'

export default class MovieSynopsis extends Component {
    render() {
        return (
            <div>
            <h5 className="sub-title">Synopsis</h5>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Proin vehicula eros sit amet est tincidunt
              aliquet. Fusce laoreet ligula ac ultrices eleifend.
              Donec hendrerit fringilla odio, ut feugiat mi
              convallis nec. Fusce elit ex, blandit vitae mattis sit
              amet, iaculis ac elit. Ut diam mauris, viverra sit
              amet dictum vel, aliquam ac quam. Ut mi nisl,
              fringilla sit amet erat et, convallis porttitor
              ligula. Sed auctor, orci id luctus venenatis, dui
              dolor euismod risus, et pharetra orci lectus quis
              sapien. Duis blandit ipsum ac consectetur scelerisque.{" "}
            </p> */}
            <p>{this.props.children}</p>
          </div>
        )
    }
}
