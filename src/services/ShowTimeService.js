import http from "../http-common";
import axios from 'axios';
import * as api from "./API_BASE_URL";

export default class ShowTimeService {
    getAll = (movieId) => {
        return axios.get(`${api.showtimes}?movie_id=${movieId}`);
      };
}
