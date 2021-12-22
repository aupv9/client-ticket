import axios from "axios";
import * as api from "./API_BASE_URL";

class SeatService {
  getSeatsByRoomId = (roomId) => {
    return axios.get(`${api.seatRoomAnonymous}?roomId=${roomId}`);
  };

  getSeatsByShowtimeId = (showtimeId) => {
    return axios.get(`${api.seatRoomAnonymous}?showTimesId=${showtimeId}`);
  };

  getSeatsByRoomIdandShowtimeId = (roomId, showtimeId) => {
    return axios.get(`${api.seatRoomAnonymous}?roomId=${roomId}&showTimesId=${showtimeId}`);
  };
}

export default new SeatService();