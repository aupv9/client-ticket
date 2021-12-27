import React, { Component } from 'react'
import LocationService from '../../services/LocationService';

export default class LocationFilter extends Component {
  constructor(props) {
    super(props);
    // this.onChangeSearchName = this.onChangeSearchName.bind(this);
    // this.retrieveMovies = this.retrieveMovies.bind(this);
    // this.searchMovie = this.searchMovie.bind(this);
    // var today = moment();
    // var tomorrow = moment(today).add(1, 'days');
    // console.log(tomorrow);
    this.state = {
      locations: null,
      isRender: false
      // searchTitle: "",
    };
  }

  componentDidMount = () => {
    this.getLocationData();
    this.setState({ isRender: !this.state.isRender })
  }

  async getLocationData() {
    try {
      const res = await LocationService.getAll();
      this.setState(prevState => ({ locations: res.data }));
      console.log(this.state.locations);
    } catch (err) {
      console.log(err)
    }
    // });
  }

  mappingData() {
    if (this.state.locations) {
      const data = this.state.locations.map((location, i) => {
        return <option value={location.id} key={i}>{location.name}</option>;
      })
      return data;
    }
  }
  render() {
    return (
      <div className="form-group">
        <div className="thumb">
          <img
            src=
            // { process.env.PUBLIC_URL +
            "/assets/images/ticket/city.png"
            // }
            alt="ticket"
          />
        </div>
        <span className="type">city</span>
        <select className="select-bar">
          {
            this.mappingData()
          }
        </select>
      </div>
    )
  }
}
