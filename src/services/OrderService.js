import axios from "axios";
import * as api from "./API_BASE_URL";

class OrderService {
  orderOnline = (offerId) => {
    return axios.post(api.ordersAnonymous);
  };
}

export default new OrderService();