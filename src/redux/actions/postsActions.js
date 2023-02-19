// Actions
const POSTS_REQUEST = 'POSTS_REQUEST';
const POSTS_SUCCESS = 'POSTS_SUCCESS';
const POSTS_FAILURE = 'POSTS_FAILURE';
const POSTS_SORT_TYPE_CHANGE = 'POSTS_SORT_TYPE_CHANGE';
const POSTS_SORT_TYPE_CHANGE_SUCCESS = 'POSTS_SORT_TYPE_CHANGE_SUCCESS';
const POSTS_SORT_PERIOD_CHANGE = 'POSTS_SORT_PERIOD_CHANGE';
const POSTS_SORT_PERIOD_CHANGE_SUCCESS = 'POSTS_SORT_PERIOD_CHANGE_SUCCESS';

// Action Creators
const postsRequest = (subreddit, sortType, sortPeriod) => ({
  type: POSTS_REQUEST,
  payload: {subreddit, sortType, sortPeriod},
});

const postsSuccess = result => ({
  type: POSTS_SUCCESS,
  payload: result,
});

const postsFailure = error => ({type: POSTS_FAILURE, payload: error});

const postsSortTypeChange = sortType => ({
  type: POSTS_SORT_TYPE_CHANGE,
  payload: sortType,
});

const postsSortTypeChangeSuccess = sortType => ({
  type: POSTS_SORT_TYPE_CHANGE_SUCCESS,
  payload: sortType,
});

const postsSortPeriodChange = payload => ({
  type: POSTS_SORT_PERIOD_CHANGE,
  payload: payload,
});

const postsSortPeriodChangeSuccess = sortPeriod => ({
  type: POSTS_SORT_PERIOD_CHANGE_SUCCESS,
  payload: sortPeriod,
});

export {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE,
  POSTS_SORT_TYPE_CHANGE,
  POSTS_SORT_TYPE_CHANGE_SUCCESS,
  POSTS_SORT_PERIOD_CHANGE,
  POSTS_SORT_PERIOD_CHANGE_SUCCESS,
  postsRequest,
  postsSuccess,
  postsFailure,
  postsSortTypeChange,
  postsSortTypeChangeSuccess,
  postsSortPeriodChange,
  postsSortPeriodChangeSuccess,
};
