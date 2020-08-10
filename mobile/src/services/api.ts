import axios from "axios";

const api = axios.create({
  // Coloca endereço do expo: porém sem a "porta" e o "exp:/"
  // A porta coloca do servidor Node
  baseURL: "http://192.168.0.4:3333",
});

export default api;
