import http from "../http-common";
import axios from 'axios';
import * as api from "./API_BASE_URL";

class LocationService {
    getAll = () => {
        return axios.get(api.locations);
      };
}

export default new LocationService();