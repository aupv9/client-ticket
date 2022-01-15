import axios from "axios";
import * as api from "./API_BASE_URL";

class FoodService {
  getFoods = () => {
    return axios.get(`${api.services}`);
  };
}

export default new FoodService();