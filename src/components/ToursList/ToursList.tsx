import ITourItem from '../../types/ITourItem';
import TourItem from '../TourItem/TourItem';
import s from './ToursList.module.css';

interface IProps {
  tours: ITourItem[];
}

const ToursList = ({ tours }: IProps) => {
  return (
    <ul className={s.list}>
      {tours.map(item => (
        <TourItem item={item} key={item._id} />
      ))}
    </ul>
  );
};

export default ToursList;
