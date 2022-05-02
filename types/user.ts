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
