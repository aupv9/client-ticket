import React, { Component } from "react";
import MovieGrid from "../movie/MovieGrid";
// import About from "./About";
import Banner from "./Banner";
// import Search from "./Search";
// import UserProfile from "./user/UserProfile";
import LocationService from "../../services/LocationService";
// import moment from "moment";
import Select from 'react-dropdown-select';
import './Home.css'
export default class Home extends Component {

  // format = "YYYY-MM-DD HH:mm:ss";

  constructor(props) {
    super(props);
    // this.onChangeSearchName = this.onChangeSearchName.bind(this);
    // this.retrieveMovies = this.retrieveMovies.bind(this);
    // this.searchMovie = this.searchMovie.bind(this);
    // var today = moment();
    // var tomorrow = moment(today).add(1, 'days');
    // console.log(tomorrow);
    this.state = {
      locations: [],
      locationId: -1,
      query: ""
      // searchTitle: "",
    };
    this.queryOnChange = this.queryOnChange.bind(this)
  }

  componentDidMount = () => {
    this.getLocationData();
  }

  async getLocationData() {
    try {
      const res = await LocationService.getAll();
      const { data } = res;
      this.setState({ locations: [...data] });
      console.log(this.state.locations);
    } catch (err) {
      console.log(err)
    }
  }

  mappingLocationData() {
    if (this.state.locations) {
      const data = this.state.locations.map((location, i) => {
        return <option value={location.id} key={i}>{location.name}</option>;
      })
      return data;
    }
  }

  onChange(values) {
    console.log(values);
    this.setState({ locationId: values[0].id })
    console.log(values[0].id);
  }

  locationOption() {
    if (this.state.locations)
      return (
        <div id="innerbox">
          <Select
            options={this.state.locations}
            labelField="name"
            //  color= "#0074D9"
            onChange={(values) => this.onChange(values)}
            // className="select-bar"
            placeholder=""
          />
        </div>
      )
  }

  queryOnChange(e) {
    this.setState({ query: e.target.value });
    console.log(this.state.query);
  }

  search(e) {
    e.preventDefault();
  }

  render() {
    // console.log("render!");
    return (
      <div id="main-content">
        <Banner></Banner>
        {/* <Search></Search> */}
        <div>
          <section className="search-ticket-section padding-top pt-lg-0">
            <div className="container">
              <div
                className="search-tab bg_img"
                data-background=
                // { process.env.PUBLIC_URL + 
                "/assets/images/ticket/ticket-bg01.jpg"
              // }
              >
                <div className="row align-items-center mb--20">
                  <div className="col-lg-6 mb-20">
                    <div className="search-ticket-header">
                      <h3 className="title">Chào bạn đến với Boleto </h3>
                      {/* <h3 className="title">what are you looking for</h3> */}
                    </div>
                  </div>
                </div>
                <div className="tab-area">
                  <div className="tab-item active">
                    <form className="ticket-search-form">
                      <div className="form-group large">
                        <input
                          value={this.state.query}
                          onChange={e => this.queryOnChange(e)}
                          name="query"
                          type="text" placeholder="Gợi ý tên phim" />
                        <button onClick={e => this.search(e)} type="submit">
                          <i className="fas fa-search" />
                        </button>
                      </div>

                      {/* <div className="form-group">
                        <div className="thumb">
                          <img
                            src=
                            { process.env.PUBLIC_URL +
                            "/assets/images/ticket/city.png"
                            }
                            alt="ticket"
                          />
                        </div>
                        <span className="type">Location&nbsp;&nbsp;</span>
                        {this.locationOption()}
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <MovieGrid
        //  locationId={this.state.locationId}
         searchTitle={this.state.query}></MovieGrid>

          


        {/* <About />
        <UserProfile /> */}
      </div>
    );
  }
}
