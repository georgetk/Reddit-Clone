import {get} from './apiClient';

export const getSubreddits = () => get('/subreddits/mine.json');
