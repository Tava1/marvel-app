import axios from 'axios';
import { md5 } from 'js-md5';

const ts = new Date().getTime();
const prk = process.env.PRIVATE_KEY;
const pbk = process.env.PUBLIC_KEY;

const hash = md5(ts + prk + pbk);

const api = axios.create({
  baseURL: process.env.BASE_URL_API,
  params: {
    apikey: process.env.PUBLIC_KEY,
    hash,
    ts,
  },
});

export default api;
