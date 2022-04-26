import { all } from "redux-saga/effects";
import { watchCreateRescue } from "./boardSaga.ts";

export default function* rootSaga() {
  yield all([watchCreateRescue()]);
}
