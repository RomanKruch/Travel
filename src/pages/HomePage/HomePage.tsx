import s from './HomePage.module.css';
import Hero from '../../Modules/Hero/Hero';
import ToursSection from '../../Modules/ToursSection/ToursSection';
import NewsSubscription from '../../Modules/NewsSubscription/NewsSubscription';
import ShareYourTour from '../../Modules/ShareYourTour/ShareYourTour';
import { Outlet } from 'react-router-dom';
import data from '../../data/tours.json';

const HomePage = () => {
 
  
  return (
    <>
      <main>
        <Hero />
        <ToursSection toursList={data} />
        <NewsSubscription />
        <ShareYourTour />
      </main>

      <Outlet />
    </>
  );
};

export default HomePage;
