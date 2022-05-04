import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "@/types/user";

const initialState: UserState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    joinRequest(state: UserState, payload) {
      state.loading = true;
    },
    joinSuccess(state: UserState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      location.href = "/user/login";
    },
    joinFailure(state: UserState, { payload }) {
      state.data = payload;
      state.loading = false;
      alert("회원가입 실패");
    },
    loginRequest(state: UserState, payload) {
      state.loading = true;
    },
    loginSuccess(state: UserState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      sessionStorage.setItem("token", JSON.stringify(payload?.token));
    },
    loginFailure(state: UserState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    logoutRequest(state: UserState) {
      state.loading = true;
    },
    logoutSuccess(state: UserState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      sessionStorage.clear();
      location.href = "/";
    },
    logoutFailure(state: UserState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const userActions = actions;
export default reducer;
