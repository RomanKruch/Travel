import ITourItem from '../../types/ITourItem';

export interface ISign {
  userInfo: {
    name: string;
    email: string;
  };
  token: string;
}

export interface IUserInfoSing {
  userInfo: {
    name: string;
    email: string;
  };
  password: string;
}

export interface ILogin {
  userInfo: {
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

export interface IDeletedTour {
  id: string;
}
