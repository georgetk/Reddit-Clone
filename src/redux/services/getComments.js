import {get} from './apiClient';

export const getComments = ({subreddit, postId}) =>
  get(`/${subreddit}/comments/${postId}.json`);
