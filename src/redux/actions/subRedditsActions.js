// Actions
const SUBREDDITS_REQUEST = 'SUBREDDITS_REQUEST';
const SUBREDDITS_SUCCESS = 'SUBREDDITS_SUCCESS';
const SUBREDDITS_FAILURE = 'SUBREDDITS_FAILURE';

// Action Creators
const subRedditsRequest = () => ({type: SUBREDDITS_REQUEST, payload: null});
const subRedditsSuccess = tokens => ({
  type: SUBREDDITS_SUCCESS,
  payload: tokens,
});
const subRedditsFailure = error => ({type: SUBREDDITS_FAILURE, payload: error});

export {
  SUBREDDITS_REQUEST,
  SUBREDDITS_SUCCESS,
  SUBREDDITS_FAILURE,
  subRedditsRequest,
  subRedditsSuccess,
  subRedditsFailure,
};
