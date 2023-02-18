// Actions
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

// Action Creators
const loginRequest = () => ({type: LOGIN_REQUEST, payload: null});
const loginSuccess = tokens => ({type: LOGIN_SUCCESS, payload: tokens});
const loginFailure = error => ({type: LOGIN_FAILURE, payload: error});
const logout = () => ({type: LOGOUT, payload: null});

export {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
};
