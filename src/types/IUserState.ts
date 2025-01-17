import ITourItem from './ITourItem';

interface IUserState {
  userInfo: {
    name: null | string;
    email: null | string;
  };
  token: null | string;
  isLogging: boolean;
  isLogged: boolean;

  likedTours: ITourItem[];
}

export default IUserState;
