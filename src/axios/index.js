import axios from "axios";
import store from "../store";
import router from "../router";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost";
window.axios = axios;

window.axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      store.dispatch("signOutStore").then(() => {
        router.push("/");
      });
    } else {
      return Promise.reject(error);
    }
  }
);

export default axios;
