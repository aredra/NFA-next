import axios, { AxiosResponse } from "axios";
import { UserType } from "@/types/user";
import { SERVER, headers } from "@/api/common";

const baseUrl = `${SERVER}/user`;
export const loginApi = async (payload: UserType) => {
  try {
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
      `${baseUrl}/login`,
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
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
      `${baseUrl}/logout`,
      {},
      { headers },
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const joinApi = async (payload: UserType) => {
  try {
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
      `${baseUrl}/join`,
      payload,
      { headers },
    );
  } catch (err) {
    return err;
  }
};
