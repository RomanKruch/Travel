import { useState } from 'react';
import TourItem from '../../components/TourItem/TourItem';
import ITourItem from '../../types/ITourItem';
import s from './ToursSection.module.css';
import Button from '../../components/Button/Button';

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
        <h2 className={s.title}>Top tours this month!</h2>

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
