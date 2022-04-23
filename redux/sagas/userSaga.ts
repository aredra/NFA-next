import { takeLatest, put } from "redux-saga/effects";
import { userActions } from "@/redux/reducers/userReducer.ts";

interface UserJoinType {
  type: string;
  payload: {
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
  };
}
interface UserLoginType {
  type: string;
  payload: {
    userid: string;
    password: string;
  };
}
interface UserJoinSuccessType {
  type: string;
  payload: {
    userid: string;
  };
}
interface UserLoginSuccessType {
  type: string;
  payload: {
    userid: string;
    email: string;
    name: string;
    phone: string;
    address: string;
    birth: string;
  };
}
