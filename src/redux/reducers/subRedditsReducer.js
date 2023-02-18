import {
  SUBREDDITS_REQUEST,
  SUBREDDITS_SUCCESS,
  SUBREDDITS_FAILURE,
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  subReddits: [],
};

const subRedditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBREDDITS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUBREDDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        subReddits: action.payload,
      };
    case SUBREDDITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default subRedditsReducer;
