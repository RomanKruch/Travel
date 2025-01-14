import { Outlet } from 'react-router-dom';
import ToursFinder from '../../Modules/ToursFinder/ToursFinder';

const ToursPage = () => {
  return (
    <>
      <main>
        <ToursFinder />
      </main>

      <Outlet />
    </>
  );
};

export default ToursPage;
