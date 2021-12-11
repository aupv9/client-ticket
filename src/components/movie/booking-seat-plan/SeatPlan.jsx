import React, { Component } from 'react'
import BannerSeatPlan from './BannerSeatPlan'
import TimeFilterSeatPlan from './TimeFilterSeatPlan'
import MovieSeat from './MovieSeat'

export default class SeatPlan extends Component {
    render() {
        return (
            <div>
                <BannerSeatPlan></BannerSeatPlan>
                <TimeFilterSeatPlan></TimeFilterSeatPlan>
                <MovieSeat></MovieSeat>
            </div>
        )
    }
}
