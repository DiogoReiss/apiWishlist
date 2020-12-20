import axios from 'axios';

const api = axios.create({
  baseURL: `https://${process.env.APIKEY}:${process.env.PASSWORD}@${process.env.HOSTNAME}/admin/api/2020-10`
})

export default api;