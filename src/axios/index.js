import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
