import {put, call, takeLatest} from 'redux-saga/effects';
import {commentsFailure, commentsSuccess, COMMENTS_REQUEST} from '../actions';
import {getComments} from '../services/getComments';

function* fetchComments(action) {
  try {
    const result = yield call(getComments, action?.payload);

    if (result) {
      yield put(commentsSuccess(result?.[1]?.data?.children));
    } else {
      yield put(
        commentsFailure(
          'Something went wrong while fetching the comments. Please try again.',
        ),
      );
    }
  } catch (error) {
    yield put(
      commentsFailure(
        'Something went wrong while fetching the comments. Please try again.',
      ),
    );
  }
}

export default function* watchComments() {
  yield takeLatest(COMMENTS_REQUEST, fetchComments);
}
