import React, { Component } from 'react'
import TheaterService from '../../../services/TheaterService';
import ScheduleItem from './ScheduleItem';

export default class SeatPlanRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showtime: this.props.showtime,
            theater: {}
        };

        console.log(this.state.showtime[0]);
    }

    componentDidMount() {
        if (this.state.showtime) {
            TheaterService.getTheaterById(this.state.showtime[0]).then((res) => {
                this.setState({ theater: res.data });
                console.log(this.state);
            })
        }
    }

    mappingScheduleData = () => {
        if (this.state.showtime && this.state.showtime[1]) {
            var schedules = this.state.showtime[1].map((item, i) => {
              console.log(item);
              return <ScheduleItem key={i} showtime={item}></ScheduleItem>;
            });
      
            return schedules;
          }
    }

    render() {
        return (
            <li className="active">
                <div className="movie-name">
                    <div className="icons">
                        <i className="far fa-heart" />
                        <i className="fas fa-heart" />
                    </div>

                    <a href="#0" className="name">
                        {this.state.theater.name}
                      
                    </a>
                    <div className="location-icon">
                        <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                        {this.state.theater.locationName}
                    </div>
                </div>

                <div className="movie-schedule">
                    {this.mappingScheduleData()}
                    {/* <div className="item">09:40</div>
                    <div className="item active">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div> */}
                </div>
            </li>
        )
    }
}
