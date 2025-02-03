import Hero from '../../Modules/Hero/Hero';
import ToursSection from '../../Modules/ToursSection/ToursSection';
import NewsSubscription from '../../Modules/NewsSubscription/NewsSubscription';
import { Outlet } from 'react-router-dom';
import data from '../../data/tours';
import MapSection from '../../Modules/MapSection/MapSection';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <ToursSection toursList={data} />
        <NewsSubscription />
        <MapSection />
      </main>

      <Outlet />
    </>
  );
};

export default HomePage;
