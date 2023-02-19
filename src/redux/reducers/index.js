import {combineReducers} from 'redux';
import commentsReducer from './commentsReducer';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';
import subRedditsReducer from './subRedditsReducer';

const reducer = combineReducers({
  login: loginReducer,
  subReddits: subRedditsReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default reducer;
