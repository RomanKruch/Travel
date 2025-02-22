import ITourItem from '../../types/ITourItem';
import s from './ToursSection.module.css';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ToursList from '../../components/ToursList/ToursList';
import axios from 'axios';

const ToursSection = () => {
  const [tours, setTours] = useState<ITourItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/tours?limit=8');
        setTours(data.tours);
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/tours');
  };

  return (
    <section>
      <div className="container">
        <Title>Top tours this month!</Title>

        {loading ? <p>Loading ...</p> : <ToursList tours={tours} />}

        <Button onClick={onClick} className={s.btn}>
          See more...
        </Button>
      </div>
    </section>
  );
};

export default ToursSection;
