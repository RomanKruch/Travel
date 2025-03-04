import ITourItem from '../../types/ITourItem';

export interface IUserInfo {
  name: string;
  email: string;
}

export interface ISign {
  userInfo: IUserInfo;
  token: string;
}

export interface IUserDataSign {
  userInfo: IUserInfo;
  password: string;
}

export interface ILogin {
  userInfo: IUserInfo;
  token: string;
  likedTours: ITourItem[];
}

export interface IUserDataLogin {
  email: string;
  password: string;
}

export interface IRefresh {
  userInfo: IUserInfo;
  token: string;
  likedTours: ITourItem[];
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}