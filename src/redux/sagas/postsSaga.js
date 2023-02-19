import {put, call, takeLatest} from 'redux-saga/effects';
import {postsFailure, postsSuccess, POSTS_REQUEST} from '../actions';

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

export default function* watchPosts() {
  console.log('watchSubReddits invoked');
  yield takeLatest(POSTS_REQUEST, fetchPosts);
}
