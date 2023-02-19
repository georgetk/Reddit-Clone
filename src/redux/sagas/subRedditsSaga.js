import {put, call, takeLatest} from 'redux-saga/effects';
import {
  subRedditsFailure,
  subRedditsSuccess,
  SUBREDDITS_REQUEST,
} from '../actions';
import {getSubreddits} from '../services';

function* fetchSubreddits() {
  try {
    const result = yield call(getSubreddits);

    if (result) {
      yield put(subRedditsSuccess(result?.data?.children));
    } else {
      yield put(
        subRedditsFailure(
          'Something went wrong while fetching sub reddits. Please try again.',
        ),
      );
    }
  } catch (error) {
    yield put(
      subRedditsFailure(
        'Something went wrong while fetching sub reddits. Please try again.',
      ),
    );
  }
}

export default function* watchSubReddits() {
  yield takeLatest(SUBREDDITS_REQUEST, fetchSubreddits);
}
