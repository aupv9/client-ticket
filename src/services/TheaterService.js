import http from "../http-common";
import axios from 'axios';
import * as api from "./API_BASE_URL";

export default class TheaterService {
    getAll = () => {
        return axios.get(api.theaters);
      };
}
