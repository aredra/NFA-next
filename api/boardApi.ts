import axios, { AxiosResponse } from "axios";
import { BoardType } from "@/types/BoardType";

const SERVER = "http://127.0.0.1:5600";
const headers = {
  "Content-Type": "application/json",
};

export const createRescueActivityApi = async (payload: BoardType) => {
  try {
    const response: AxiosResponse<unknown, BoardType[]> = await axios.post(
      `${SERVER}/board/rescue-activity`,
      payload,
      { headers },
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getRescueActivityListApi = async () => {
  try {
    const response: AxiosResponse<unknown, BoardType[]> = await axios.get(
      `${SERVER}/board/rescue-list`,
      { headers },
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
