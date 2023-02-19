import {get} from './apiClient';

export const getPosts = (subreddit, sortType = '') =>
  get(`/${subreddit}${sortType?.length > 0 ? `/${sortType}` : ''}`);
