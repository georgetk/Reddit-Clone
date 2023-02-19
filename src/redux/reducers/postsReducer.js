import {POSTS_FAILURE, POSTS_REQUEST, POSTS_SUCCESS} from '../actions';

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default postsReducer;
