import { all } from "redux-saga/effects";
import {
  watchCreateRescue,
  watchUpdateRescue,
  watchDeleteRescue,
} from "./boardSaga.ts";
import { watchJoin, watchLogin, watchLogout } from "./userSaga.ts";

export default function* rootSaga() {
  yield all([
    watchCreateRescue(),
    watchUpdateRescue(),
    watchDeleteRescue(),
    watchJoin(),
    watchLogin(),
    watchLogout(),
  ]);
}
