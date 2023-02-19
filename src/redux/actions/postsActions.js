// Actions
const POSTS_REQUEST = 'POSTS_REQUEST';
const POSTS_SUCCESS = 'POSTS_SUCCESS';
const POSTS_FAILURE = 'POSTS_FAILURE';

// Action Creators
const postsRequest = subreddit => ({
  type: POSTS_REQUEST,
  payload: subreddit,
});

const postsSuccess = result => ({
  type: POSTS_SUCCESS,
  payload: result,
});

const postsFailure = error => ({type: POSTS_FAILURE, payload: error});

export {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE,
  postsRequest,
  postsSuccess,
  postsFailure,
};
