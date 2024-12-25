import s from './HomePage.module.css';
import Hero from '../../Modules/Hero/Hero';
import ToursSection from '../../Modules/ToursSection/ToursSection';
import NewsSubscription from '../../Modules/NewsSubscription/NewsSubscription';
import ShareYourTour from '../../Modules/ShareYourTour/ShareYourTour';
import data from '../../data/tours.json';

interface IProps {
  isDark: boolean;
}

const HomePage = ({ isDark }: IProps) => {
  return (
    <main>
      <Hero isDark={isDark} />
      <ToursSection toursList={data} />
      <NewsSubscription />
      <ShareYourTour />
    </main>
  );
};

export default HomePage;
