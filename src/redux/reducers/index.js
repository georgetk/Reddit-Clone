import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';
import subRedditsReducer from './subRedditsReducer';

const reducer = combineReducers({
  login: loginReducer,
  subReddits: subRedditsReducer,
  posts: postsReducer,
});

export default reducer;
