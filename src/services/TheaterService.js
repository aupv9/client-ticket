import axios from "axios";
import * as api from "./API_BASE_URL";

class TheaterService {
  getAll = () => {
    return axios.get(api.theaters);
  };

  getTheaterById = (theaterId) => {
    return axios.get(`${api.theaters}/${theaterId}`);
  };
}

export default new TheaterService();
