import { Outlet } from 'react-router-dom';
import s from './UserPage.module.css';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import TourItem from '../../components/TourItem/TourItem';
import Button from '../../components/Button/Button';
import { onLogout } from '../../redux/user/userOperations';

const UserPage = () => {
  const username = useAppSelector(s => s.user.userInfo.name);
  const likedTours = useAppSelector(s => s.user.likedTours);

  const dispatch = useAppDispatch();

  const onCLick = () => {
    dispatch(onLogout());
  };

  return (
    <>
      <main className={s.page}>
        <div className="container">
          <h2 className={s.title}>Hello {username}!</h2>
          <Button onClick={onCLick}>Logout</Button>

          <h2 className={s.list_title}>Liked tours:</h2>
          <ul className={s.list}>
            {likedTours.map(item => (
              <TourItem item={item} key={item._id} />
            ))}
          </ul>
        </div>
      </main>

      <Outlet />
    </>
  );
};

export default UserPage;
