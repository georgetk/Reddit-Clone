import {put, call, takeLatest} from 'redux-saga/effects';
import {authorize} from 'react-native-app-auth';
import {loginFailure, loginSuccess, LOGIN_REQUEST} from '../actions';
import {authConfig} from '../services';
import {ACCESS_TOKEN, storeData} from '../../utils';

function* login() {
  try {
    const result = yield call(authorize, authConfig);
    console.log('result ', result);

    if (result?.accessToken?.length > 0) {
      storeData(ACCESS_TOKEN, result?.accessToken);

      yield put(loginSuccess(result));
    } else {
      yield put(
        loginFailure(
          'Something went wrong while logging you in. Please try again.',
        ),
      );
    }
  } catch (error) {
    console.log('error ', error);

    yield put(
      loginFailure(
        'Something went wrong while logging you in. Please try again.',
      ),
    );
  }
}

export default function* watchLogin() {
  console.log('watchLogin invoked');
  yield takeLatest(LOGIN_REQUEST, login);
}
