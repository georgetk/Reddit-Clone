import {get} from './apiClient';

export const getPosts = ({subreddit, sortType = 'hot', sortPeriod = 'all'}) =>
  get(`/${subreddit}/${sortType}.json?sort=${sortType}&t=${sortPeriod}`);
