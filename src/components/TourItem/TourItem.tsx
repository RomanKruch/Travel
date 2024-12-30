import s from './TourItem.module.css';
import tourItemType from '../../types/ITourItem';
import Button from '../Button/Button';
import LikeIcon from '../../icons/LIkeIcon';
import Modal from '../Modal/Modal';
import TourModal from '../TourModal/TourModal';
import { useState } from 'react';

interface IProps {
  item: tourItemType;
}

const TourItem = ({ item }: IProps) => {
  const { description, photo, price, title } = item;

  const [isOpen, setIsOpen] = useState(false);

  const shortDescription =
    description.length > 75 ? description.slice(0, 75) + '...' : description;

  const onClickModal = () => {
    setIsOpen(true);
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
          <Button className={s.btn}>
            <LikeIcon isFilled={false} />
          </Button>
          <Button onClick={onClickModal}>...</Button>
        </div>
      </li>

      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <TourModal tour={item} />
        </Modal>
      )}
    </>
  );
};

export default TourItem;
