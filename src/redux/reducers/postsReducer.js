import {
  SORT_PERIOD_KEYS,
  SORT_PERIOD_VALUES,
  SORT_TYPE_KEYS,
} from '../../constants';
import {POSTS_FAILURE, POSTS_REQUEST, POSTS_SUCCESS} from '../actions';
import {
  POSTS_SORT_PERIOD_CHANGE_SUCCESS,
  POSTS_SORT_TYPE_CHANGE_SUCCESS,
} from '../actions/postsActions';

const initialState = {
  loading: false,
  error: null,
  posts: [],
  selectedSort: SORT_TYPE_KEYS.HOT,
  selectedSortPeriodKey: SORT_PERIOD_KEYS.ALL,
  selectedSortPeriodValue: SORT_PERIOD_VALUES.ALL_TIME,
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
    case POSTS_SORT_TYPE_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedSort: action.payload,
      };
    case POSTS_SORT_PERIOD_CHANGE_SUCCESS:
      const {payload} = action;
      return {
        ...state,
        loading: false,
        selectedSortPeriodKey: payload.sortPeriodKey,
        selectedSortPeriodValue: payload.sortPeriodValue,
      };
    default:
      return state;
  }
};

export default postsReducer;
