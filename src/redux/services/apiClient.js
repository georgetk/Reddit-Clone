import axios from 'axios';
import {ENV_VARS, STORAGE_KEYS} from '../../constants';
import {getData} from '../../utils';

const BASE_URL = ENV_VARS.BASE_URL;

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json',
};

const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

axiosApi.interceptors.request.use(async config => {
  const token = await getData(STORAGE_KEYS.ACCESS_TOKEN);
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export const get = async (url, config) =>
  await axiosApi
    .get(url, {
      ...config,
    })
    .then(response => response?.data);
