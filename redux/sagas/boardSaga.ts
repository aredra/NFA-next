import { takeLatest, put } from "redux-saga/effects";
import { boardActions } from "@/redux/reducers/boardReducer.ts";
import { BoardType } from "@/types/BoardType";
import { createRescueActivityApi } from "@/api/boardApi.ts";

interface BoardRequestType {
  type: string;
  payload: BoardType;
}
interface BoardResponseType {
  type: string;
  payload: {
    id: number;
  };
}

function* createRescueActivitySaga(report: BoardRequestType) {
  console.log("createRescueActivity saga");

  try {
    const response: BoardResponseType = yield createRescueActivityApi(
      report.payload,
    );
  } catch (error) {
    yield put(boardActions.requestFailure(error));
  }
}
export function* watchCreateRescue() {
  yield takeLatest(boardActions.createRescueActivity, createRescueActivitySaga);
}
