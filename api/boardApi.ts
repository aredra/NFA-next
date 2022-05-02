import axios, { AxiosResponse } from "axios";
import { BoardType } from "@/types/board";
import { SERVER, headers } from "@/api/common";

const baseUrl = `${SERVER}/board`;

export const createRescueActivityApi = async (payload: BoardType) => {
  try {
    const response: AxiosResponse<unknown, BoardType[]> = await axios.post(
      `${baseUrl}/rescue-activity`,
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
      `${baseUrl}/rescue-list`,
      { headers },
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateRescueActivityApi = async (payload: BoardType) => {
  try {
    const response: AxiosResponse<unknown, BoardType[]> = await axios.put(
      `${baseUrl}/rescue-activity`,
      payload,
      { headers },
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deleteRescueActivityApi = async (id: string) => {
  try {
    const response: AxiosResponse<unknown, BoardType[]> = await axios.delete(
      `${baseUrl}/rescue-activity/${id}`,
      { headers },
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
