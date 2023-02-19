import {all} from 'redux-saga/effects';
import watchComments from './commentsSaga';
import watchLogin from './loginSaga';
import {watchPosts, watchSortType, watchSortPeriod} from './postsSaga';
import watchSubReddits from './subRedditsSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSubReddits(),
    watchPosts(),
    watchSortType(),
    watchSortPeriod(),
    watchComments(),
  ]);
}
