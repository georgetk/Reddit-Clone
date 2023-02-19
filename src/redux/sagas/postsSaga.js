import {put, call, takeLatest} from 'redux-saga/effects';
import {postsFailure, postsSuccess, POSTS_REQUEST} from '../actions';
import {
  postsSortPeriodChangeSuccess,
  postsSortTypeChangeSuccess,
  POSTS_SORT_PERIOD_CHANGE,
  POSTS_SORT_TYPE_CHANGE,
} from '../actions/postsActions';

import {getPosts} from '../services';

function* fetchPosts(action) {
  try {
    const result = yield call(getPosts, action?.payload);

    if (result) {
      yield put(postsSuccess(result?.data?.children));
    } else {
      yield put(
        postsFailure(
          'Something went wrong while fetching the posts. Please try again.',
        ),
      );
    }
  } catch (error) {
    yield put(
      postsFailure(
        'Something went wrong while fetching the posts. Please try again.',
      ),
    );
  }
}

function* changeSortType(action) {
  yield put(postsSortTypeChangeSuccess(action.payload));
}

function* changeSortPeriod(action) {
  yield put(postsSortPeriodChangeSuccess(action.payload));
}

function* watchPosts() {
  yield takeLatest(POSTS_REQUEST, fetchPosts);
}

function* watchSortType() {
  yield takeLatest(POSTS_SORT_TYPE_CHANGE, changeSortType);
}

function* watchSortPeriod() {
  yield takeLatest(POSTS_SORT_PERIOD_CHANGE, changeSortPeriod);
}

export {watchPosts, watchSortType, watchSortPeriod};
