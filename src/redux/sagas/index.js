import {all} from 'redux-saga/effects';
import watchLogin from './loginSaga';
import watchPosts from './postsSaga';
import watchSubReddits from './subRedditsSaga';

export default function* rootSaga() {
  yield all([watchLogin(), watchSubReddits(), watchPosts()]);
}
