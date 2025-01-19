import { Outlet } from 'react-router-dom';
import s from './UserPage.module.css';
import { useAppSelector } from '../../redux/hooks';
import TourItem from '../../components/TourItem/TourItem';

const UserPage = () => {
  const username = useAppSelector(s => s.user.userInfo.name);
  const likedTours = useAppSelector(s => s.user.likedTours);

  return (
    <>
      <main className={s.page}>
        <div className="container">
          <h2 className={s.title}>Hello {username}!</h2>

          <h2 className={s.list_title}>Liked tours:</h2>
          <ul className={s.list}>
            {likedTours.map(item => (
              <TourItem item={item} />
            ))}
          </ul>
        </div>
      </main>

      <Outlet />
    </>
  );
};

export default UserPage;
