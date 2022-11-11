import axios from "axios";

export default class AuthService {
  singUp(data) {
    return axios.post("/auth/sign-up", data);
  }

  singIn(data) {
    return axios.post("/auth/sign-in", data);
  }
}
