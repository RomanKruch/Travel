import TourItem from '../../components/TourItem/TourItem';
import ITourItem from '../../types/ITourItem';
import s from './ToursSection.module.css';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { useNavigate } from 'react-router-dom';

interface IProps {
  toursList: ITourItem[];
}

const ToursSection = ({ toursList }: IProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/tours')
  };

  return (
    <section className={s.section}>
      <div className="container">
        <Title>Top tours this month!</Title>

        <ul className={s.list}>
          {toursList.slice(0, 4).map(item => (
            <TourItem item={item} key={item.id} />
          ))}
        </ul>

        <Button onClick={onClick} className={s.btn}>
          See more...
        </Button>
      </div>
    </section>
  );
};

export default ToursSection;
