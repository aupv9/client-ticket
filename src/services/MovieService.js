import http from "../http-common";
import axios from 'axios';
import * as api from "./API_BASE_URL";

class MovieService {
  // getAll = async () => {
  //   let response = await http.get(api.movies);
  //   return response.data;
  // };

  getAll = () => {
    return axios.get(api.movies);
  };

  getMovieById(movieId) {
    return axios.get(api.movies + "/" + movieId);
  }

  //     getAll() {
  //       return http.get("/movies");
  //     }

  //     get(id) {
  //       return http.get(`/movies/${id}`);
  //     }

  //     create(data) {
  //       return http.post("/movies", data);
  //     }

  //     update(id, data) {
  //       return http.put(`/movies/${id}`, data);
  //     }

  //     delete(id) {
  //       return http.delete(`/movies/${id}`);
  //     }

  //     deleteAll() {
  //       return http.delete(`/movies`);
  //     }

  //     findByName(name) {
  //       return http.get(`/movies?name=${name}`);
  //     }
}

export default new MovieService();
