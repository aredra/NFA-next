import { takeLatest, put } from "redux-saga/effects";
import { boardActions } from "@/redux/reducers/boardReducer.ts";
import { BoardType } from "@/types/BoardType";

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

function* createRescueActivity(user: BoardRequestType) {
  try {
    const response: BoardResponseType = yield createRescueActivityApi(
      user.payload,
    );
  } catch (error) {
    yield put(boardActions.requestFailure(error));
  }
}
export function* watchJoin() {
  yield takeLatest(userActions.joinRequest, createRescueActivity);
}
