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
    console.log('result ', result);

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
    console.log('error ', error);

    yield put(
      subRedditsFailure(
        'Something went wrong while fetching sub reddits. Please try again.',
      ),
    );
  }
}

export default function* watchSubReddits() {
  console.log('watchSubReddits invoked');
  yield takeLatest(SUBREDDITS_REQUEST, fetchSubreddits);
}
