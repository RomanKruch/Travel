import s from './TourItem.module.css';
import tourItemType from '../../types/tourItemType';
import Button from '../Button/Button';
import LikeIcon from '../../icons/LIkeIcon';

interface IProps {
  item: tourItemType;
}

const TourItem = ({ item }: IProps) => {
  const { description, id, location, photo, price, title } = item;

  return (
    <li className={s.item}>
      <img src={photo} alt={title} className={s.img} />
      <div className={s.content_wrap}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>

      <div className={s.btn_wrap}>
        <Button className={s.btn}>
          <LikeIcon isFilled={true}/>
        </Button>
        <Button>...</Button>
      </div>
    </li>
  );
};

export default TourItem;
