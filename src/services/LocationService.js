import axios from "axios";
import * as api from "./API_BASE_URL";

class LocationService {
  getAll = () => {
    return axios.get(api.locations);
  };

  getAllbyId = async (locationId) => {
    return await axios.get(`${api.locations}/${locationId}`);
  };
}

export default new LocationService();
