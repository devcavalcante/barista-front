import axios from 'axios';

export const api = axios.create({
  baseURL: "https://barista-backend.herokuapp.com/"
});