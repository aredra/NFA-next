import { takeLatest, put } from "redux-saga/effects";
import { userActions } from "@/redux/reducers/userReducer.ts";
import { UserType } from "@/types/user";
import { joinApi, loginApi, logoutApi } from "@/api/userApi.ts";

interface UserJoinType {
  type: string;
  payload: UserType;
}
interface UserLoginType {
  type: string;
  payload: UserType;
}
interface UserJoinSuccessType {
  type: string;
  payload: {
    userid: string;
  };
}
interface UserLoginSuccessType {
  type: string;
  payload: UserType;
}

function* join(user: UserJoinType) {
  try {
    const response: UserJoinSuccessType = yield joinApi(user.payload);
    yield put(userActions.joinSuccess(response));
    location.href = "/user/login";
  } catch (error) {
    yield put(userActions.joinFailure(error));
  }
}
export function* watchJoin() {
  yield takeLatest(userActions.joinRequest, join);
}

function* login(user: UserLoginType) {
  try {
    const response: UserLoginSuccessType = yield loginApi(user.payload);
    yield put(userActions.loginSuccess(response));
  } catch (error) {
    yield put(userActions.loginFailure(error));
  }
}
export function* watchLogin() {
  yield takeLatest(userActions.loginRequest, login);
}

function* logout() {
  try {
    const response: UserLoginSuccessType = yield logoutApi();
    yield put(userActions.logoutSuccess(response));
  } catch (error) {
    yield put(userActions.logoutFailure(error));
  }
}
export function* watchLogout() {
  yield takeLatest(userActions.logoutRequest, logout);
}
