import axios from "axios";

// production -> https://cutbio-backend.herokuapp.com

// local -> http://localhost:4000

export const api = axios.create({
  baseURL: "http://localhost:4000",
}) 