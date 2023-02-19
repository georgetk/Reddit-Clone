import {put, call, takeLatest} from 'redux-saga/effects';
import {authorize} from 'react-native-app-auth';
import {loginFailure, loginSuccess, LOGIN_REQUEST} from '../actions';
import {authConfig} from '../services';
import {storeData} from '../../utils';
import {STORAGE_KEYS} from '../../constants';

function* login() {
  try {
    const result = yield call(authorize, authConfig);

    if (result?.accessToken?.length > 0) {
      storeData(STORAGE_KEYS.ACCESS_TOKEN, result?.accessToken);

      yield put(loginSuccess(result));
    } else {
      yield put(
        loginFailure(
          'Something went wrong while logging you in. Please try again.',
        ),
      );
    }
  } catch (error) {
    yield put(
      loginFailure(
        'Something went wrong while logging you in. Please try again.',
      ),
    );
  }
}

export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}
