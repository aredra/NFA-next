import { all } from "redux-saga/effects";
import { watchCreateRescue } from "./userSaga.ts";

export default function* rootSaga() {
  yield all([watchCreateRescue]);
}
