import {get} from './apiClient';

export const getPosts = (subRedditName, sortType = '') =>
  get(`/${subRedditName}${sortType?.length > 0 ? `/${sortType}` : ''}`);
