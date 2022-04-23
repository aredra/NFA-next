import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import user from "./reducers/userReducer.ts";

const rootReducer = (state: any, action: any) => {
  // TODO: HYDRATE ??
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({ user })(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
