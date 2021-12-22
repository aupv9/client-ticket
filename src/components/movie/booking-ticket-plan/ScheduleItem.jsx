import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/vi'

export default class ScheduleItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showtime: this.props.showtime
        };
        console.log(this.state.showtime);
    }

    getTime = () => {
        var time = new Date(this.state.showtime.timeStart);
        return time.getHours() + ":" + time.getMinutes();
    }

    getDate = () => {
        var time = new Date(this.state.showtime.timeStart);
        // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
        return moment(time, "YYYY-MM-DD HH:mm:ss").fromNow();
    }

    getDate2 = () => {
        var time = new Date(this.state.showtime.timeStart);
        // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
        return moment(time, "YYYY-MM-DD HH:mm:ss").add(10, 'days').calendar();
    }

    isFuture(timeStart) {
        return new Date().getTime() - new Date(timeStart).getTime() < 0;
    }

    render() {

        if (true)
            return (
                <Link to={"choose-seats/" + this.state.showtime.id}>
                    <div className="item">{this.getTime()}</div>
                    <div className="">{this.getDate()}</div>
                    <div className="">{this.getDate2()}</div>
                </Link>
            )
        else {
            return (
                <div></div>
            )
        }
    }
}
