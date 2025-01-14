import s from './TourItem.module.css';
import tourItemType from '../../types/ITourItem';
import Button from '../Button/Button';
import LikeIcon from '../../icons/LIkeIcon';
import { NavLink } from 'react-router-dom';

interface IProps {
  item: tourItemType;
}

const TourItem = ({ item }: IProps) => {
  const { description, photo, price, title, id } = item;

  const shortDescription =
    description.length > 75 ? description.slice(0, 75) + '...' : description;

  return (
    <>
      <li className={s.item}>
        <img src={photo} alt={title} className={s.img} />
        <div className={s.content_wrap}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{shortDescription}</p>
          <p className={s.price}>${price}</p>
        </div>

        <div className={s.btn_wrap}>
          <Button className={s.btn}>
            <LikeIcon isFilled={false} />
          </Button>
          <NavLink to={'/tours/' + id}>
            <Button>...</Button>
          </NavLink>
        </div>
      </li>
    </>
  );
};

export default TourItem;
