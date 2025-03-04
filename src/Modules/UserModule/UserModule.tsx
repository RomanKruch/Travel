import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import LogoutIcon from '../../icons/LogoutIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import UserIcon from '../../icons/UserIcon';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { onLogout } from '../../redux/user/userOperations';
import s from './UserModule.module.css';

const UserModule = () => {
  const user = useAppSelector(s => s.user);
  const { totalToursViewed, userInfo, likedTours } = user;
  // const username = useAppSelector(s => s.user.userInfo.name);
  // const likedTours = useAppSelector(s => s.user.likedTours);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCLick = () => {
    dispatch(onLogout());
  };

  const onSettings = () => {
    navigate('settings');
  };

  return (
    <div className={s.wrap}>
      <div className={s.icon_wrap}>
        <UserIcon classname={s.icon} />
      </div>
      <h2 className={s.title}>{userInfo.name}</h2>
      <p className={s.subtitle}>Total tours viewed: {totalToursViewed}</p>
      <p className={s.subtitle}>Liked tours: {likedTours.length}</p>
      <div className={s.btn_wrap}>
        <Button onClick={onCLick} className={s.btn}>
          <LogoutIcon />
        </Button>
        <Button onClick={onSettings} className={s.btn}>
          <SettingsIcon />
        </Button>
      </div>
    </div>
  );
};

export default UserModule;
