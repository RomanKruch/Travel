import Hero from '../../Modules/Hero/Hero';
import ToursSection from '../../Modules/ToursSection/ToursSection';
import NewsSubscription from '../../Modules/NewsSubscription/NewsSubscription';
import { Outlet } from 'react-router-dom';
import MapSection from '../../Modules/MapSection/MapSection';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <ToursSection />
        <NewsSubscription />
        <MapSection />
      </main>

      <Outlet />
    </>
  );
};

export default HomePage;
