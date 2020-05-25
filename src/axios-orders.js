import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-c6ed4.firebaseio.com/",
});

export default instance;
