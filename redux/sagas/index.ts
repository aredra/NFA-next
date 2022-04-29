import { all } from "redux-saga/effects";
import {
  watchCreateRescue,
  watchUpdateRescue,
  watchDeleteRescue,
} from "./boardSaga.ts";

export default function* rootSaga() {
  yield all([watchCreateRescue(), watchUpdateRescue(), watchDeleteRescue()]);
}
