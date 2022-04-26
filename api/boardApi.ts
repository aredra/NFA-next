import axios, { AxiosResponse } from "axios";
import { BoardType } from "@/types/BoardType";

const SERVER = "http://127.0.0.1:5600";
const headers = {
  "Content-Type": "application/json",
};

export const joinApi = async (payload: BoardType) => {
  try {
    const response: AxiosResponse<unknown, BoardType[]> = await axios.post(
      `${SERVER}/user/join`,
      payload,
      { headers },
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const logoutApi = async () => {
  try {
    const response: AxiosResponse<unknown, BoardType[]> = await axios.get(
      `${SERVER}/user/logout`,
      { headers },
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
