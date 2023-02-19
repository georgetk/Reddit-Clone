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
    console.log('fetchPosts action ', action);
    const result = yield call(getPosts, action?.payload);
    console.log('result ', result);

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
    console.log('error ', error);

    yield put(
      postsFailure(
        'Something went wrong while fetching the posts. Please try again.',
      ),
    );
  }
}

function* changeSortType(action) {
  console.log('changeSortType ', action);
  yield put(postsSortTypeChangeSuccess(action.payload));
}

function* changeSortPeriod(action) {
  console.log('changeSortPeriod ', action);
  yield put(postsSortPeriodChangeSuccess(action.payload));
}

function* watchPosts() {
  console.log('watchPosts invoked');
  yield takeLatest(POSTS_REQUEST, fetchPosts);
}

function* watchSortType() {
  console.log('watchSortType invoked');
  yield takeLatest(POSTS_SORT_TYPE_CHANGE, changeSortType);
}

function* watchSortPeriod() {
  console.log('watchSortPeriod invoked');
  yield takeLatest(POSTS_SORT_PERIOD_CHANGE, changeSortPeriod);
}

export {watchPosts, watchSortType, watchSortPeriod};
