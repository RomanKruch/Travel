import { NavLink } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import Button from '../Button/Button';
import { useAppSelector } from '../../redux/hooks';

const UserBar = () => {
  const isLogged = useAppSelector(s => s.user.isLogged);

  return (
    <>
      {isLogged ? (
        <UserInfo />
      ) : (
        <NavLink to="/login">
          <Button>Log in</Button>
        </NavLink>
      )}
    </>
  );
};

export default UserBar;
