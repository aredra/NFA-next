import { createSlice } from "@reduxjs/toolkit";

export interface UserType {
  userid: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
  address: string;
}

export interface UserState {
  loading: boolean;
  data: UserType[];
  error: any;
}

const initialState: UserState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

const { reducer, actions } = userSlice;
export const userActions = actions;
export default reducer;
