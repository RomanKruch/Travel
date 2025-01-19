import { useAppSelector } from '../../redux/hooks';
import UserIcon from '../../icons/UserIcon';
import s from './UserInfo.module.css';
import { NavLink } from 'react-router-dom';

const UserInfo = () => {
  const username = useAppSelector(s => s.user.userInfo.name);

  return (
    <NavLink to="/user" className={s.link}>
      <p className={s.text}>{username}</p>
      <UserIcon classname={s.icon} />
    </NavLink>
  );
};

export default UserInfo;
