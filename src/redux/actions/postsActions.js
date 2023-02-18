// Actions
const POSTS_REQUEST = 'POSTS_REQUEST';
const POSTS_SUCCESS = 'POSTS_SUCCESS';
const POSTS_FAILURE = 'POSTS_FAILURE';

// Action Creators
const postsRequest = subRedditName => ({
  type: POSTS_REQUEST,
  payload: subRedditName,
});
const postsSuccess = tokens => ({
  type: POSTS_SUCCESS,
  payload: tokens,
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
