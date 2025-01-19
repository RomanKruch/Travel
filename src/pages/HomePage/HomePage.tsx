import s from './HomePage.module.css';
import Hero from '../../Modules/Hero/Hero';
import ToursSection from '../../Modules/ToursSection/ToursSection';
import NewsSubscription from '../../Modules/NewsSubscription/NewsSubscription';
import ShareYourTour from '../../Modules/ShareYourTour/ShareYourTour';
import { Outlet } from 'react-router-dom';
import data from '../../data/tours.json';
import { useAppSelector } from '../../redux/hooks';

const HomePage = () => {
  const isDark = useAppSelector(s => s.theme.isDark);
  return (
    <>
      <main>
        <Hero isDark={isDark} />
        <ToursSection toursList={data} />
        <NewsSubscription />
        <ShareYourTour />
      </main>

      <Outlet />
    </>
  );
};

export default HomePage;
