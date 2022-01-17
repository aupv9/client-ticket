import React, { Component } from 'react'

export default class SeatItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBooked: false
        };
    }

    seatDisplay() {
        if (this.props.isSelected) {
            return "/assets/images/movie/seat01.png"
        }
        if (this.state.isBooked) {
            return "/assets/images/movie/seat01-booked.png"
        }
        return "/assets/images/movie/seat01-free.png"

    }

    getSeatNumber() {
        if (this.props.isSelected) {
            return "";
        }

        return this.props.seat.tier + this.props.seat.numbers;

    }

    toggleSeat = (e) => {
        if (!this.props.isSelected) {
            this.setState({
                isBooked: !this.state.isBooked
            })
            console.log(this.props.seat.numbers, !this.state.isBooked);
            this.props.parentCallback(this.props.seat, !this.state.isBooked);
            e.preventDefault();
        } else {
            alert("Ví trí ghế này đã được đặt trước!!!\nVui lòng chọn vị trị khác\n Cảm ơn!")
        }
    }

    render() {
        return (
            <li onClick={this.toggleSeat} className="single-seat seat-free">
                <img
                    src={this.seatDisplay()}
                    alt="seat"
                />
                <span className="sit-num">{this.getSeatNumber()}</span>
            </li>
        )
    }
}
