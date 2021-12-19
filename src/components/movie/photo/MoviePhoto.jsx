import React, { Component } from "react";
import MoviePhotoItem from "./MoviePhotoItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class MoviePhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reload: false
    };
  }

  mappingDataPhoto = () => {
    // if (this.props.photo_urls) {
    //   console.log(this.props.photo_urls);
    //   var photoList = this.props.photo_urls.map((item, i) => {
    //     return <MoviePhotoItem key={i}>{item}</MoviePhotoItem>;
    //   });

    //   return photoList;
    // }

  };

  render() {
    let photoList;
    if (this.props.photo_urls) {
      photoList =
        this.props.photo_urls.map((url) => (
          // <div>
            <img src="/assets/images/movie/movie-details02.jpg"
              alt="movie" />
          // </div>
        ))

    }
    return (
      <Carousel showArrows={true}  showThumbs={true} className="details-photos owl-carousel">

        {photoList}

      </Carousel>
    );
  }
}
