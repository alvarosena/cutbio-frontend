import axios from "axios";

export const api = axios.create({
  baseURL: "https://cutbio-backend.herokuapp.com",
}) 