import {COMMENTS_FAILURE, COMMENTS_REQUEST, COMMENTS_SUCCESS} from '../actions';

const initialState = {
  loading: false,
  error: null,
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default commentsReducer;
