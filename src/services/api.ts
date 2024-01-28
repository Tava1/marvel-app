import axios from 'axios';
import { md5 } from 'js-md5';

const timestamp = new Date().getTime();
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const hash = md5(timestamp + privateKey + publicKey);

export const api = axios.create({
  baseURL: process.env.BASE_URL_API,
  params: {
    apikey: process.env.PUBLIC_KEY,
    hash,
    ts: timestamp,
  },
});
