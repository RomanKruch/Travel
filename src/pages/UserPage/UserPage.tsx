import { Outlet } from 'react-router-dom';
import s from './UserPage.module.css';
import { useAppSelector } from '../../redux/hooks';
import UserModule from '../../Modules/UserModule/UserModule';
import ToursList from '../../components/ToursList/ToursList';
import Title from '../../components/Title/Title';

const UserPage = () => {
  const likedTours = useAppSelector(s => s.user.likedTours);

  return (
    <>
      <main className={s.page}>
        <div className={`container ${s.wrap}`}>
          <UserModule />

          <div>
            <Title>Liked tours:</Title>
            <ToursList tours={likedTours} />
          </div>
        </div>
      </main>

      <Outlet />
    </>
  );
};

export default UserPage;
