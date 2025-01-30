import { useState } from 'react';
import TourItem from '../../components/TourItem/TourItem';
import ITourItem from '../../types/ITourItem';
import s from './ToursSection.module.css';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

interface IProps {
  toursList: ITourItem[];
}

const ToursSection = ({ toursList }: IProps) => {
  const [viewToursCount, setViewToursCount] = useState(4);

  const onClick = () => {
    setViewToursCount(s => s + 4);
  };

  return (
    <section className={s.section}>
      <div className="container">
        <Title>Top tours this month!</Title>

        <ul className={s.list}>
          {toursList.slice(0, viewToursCount).map(item => (
            <TourItem item={item} key={item.id} />
          ))}
        </ul>

        <Button onClick={onClick} className={s.btn}>
          Load more...
        </Button>
      </div>
    </section>
  );
};

export default ToursSection;
