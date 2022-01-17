import axios from "axios";

export const api = axios.create({
  baseURL: 'http://cutbio.herokuapp.com/api/users'
}) 