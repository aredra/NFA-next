import { createSlice } from "@reduxjs/toolkit";
import { BoardState, BoardType } from "@/types/BoardType";

const initialState: BoardState = {
  loading: false,
  data: [],
  error: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createRescueActivity(state: BoardState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
    },
    getRescueAcitivityList() {},
    updateRescueActivity(state: BoardState, payload) {},
    deleteRescueActivity(state: BoardState, payload) {},
    requestFailure(state: BoardState, payload) {},
  },
});

const { reducer, actions } = boardSlice;
export const boardActions = actions;
export default reducer;
