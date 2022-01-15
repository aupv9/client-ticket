import axios from "axios";
import * as api from "./API_BASE_URL";

class OrderService {
  orderOnline = (order) => {
    // console.log(order)
    return axios.post(api.ordersAnonymous, order);
  };

  updateOrder = (order) => {
    return axios.put(`${api.ordersAnonymous}/${order.id}`, order);
  }
  getOrdersByUserId = (userId) => {
    return axios.get(`${api.ordersUser}?user_id=${userId}`)
  }
}

export default new OrderService();