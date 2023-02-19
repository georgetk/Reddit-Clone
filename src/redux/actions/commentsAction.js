// Actions
const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
const COMMENTS_FAILURE = 'COMMENTS_FAILURE';

// Action Creators
const commentsRequest = (subreddit, postId) => ({
  type: COMMENTS_REQUEST,
  payload: {subreddit, postId},
});

const commentsSuccess = result => ({
  type: COMMENTS_SUCCESS,
  payload: result,
});

const commentsFailure = error => ({type: COMMENTS_FAILURE, payload: error});

export {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  commentsRequest,
  commentsSuccess,
  commentsFailure,
};
