import s from './TourItem.module.css';
import tourItemType from '../../types/ITourItem';
import Button from '../Button/Button';
import LikeIcon from '../../icons/LIkeIcon';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onAddToLike, onDeleteFromLike } from '../../redux/user/userOperations';
import LikeBtn from '../LikeBtn/LikeBtn';

interface IProps {
  item: tourItemType;
}

const TourItem = ({ item }: IProps) => {
  const { description, photo, price, title, id } = item;

  const shortDescription = description.length > 70 ? description.slice(0, 70) + '...' : description;

  const navigate = useNavigate();
  const routeLocation = useLocation();
  const path = routeLocation.pathname;


  const onOpenModal = () => {
    const fixPath = path === '/' ? path : path + '/';

    navigate(fixPath + id, { state: { from: path } });
  };

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
          <LikeBtn id={id} />

          <Button onClick={onOpenModal}>...</Button>
        </div>
      </li>
    </>
  );
};

export default TourItem;
