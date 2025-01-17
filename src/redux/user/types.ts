import ITourItem from "../../types/ITourItem";

export interface ISign {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface IUserInfoSing {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  user: {
    name: string;
    email: string;
  };
  token: string;
  likedTours: ITourItem[];
}
export interface IUserInfo {
  email: string;
  password: string;
}

export interface IRefresh {
  userInfo: {
    name: string;
    email: string;
  };
  token: string;
  likedTours: ITourItem[];
}
