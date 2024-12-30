import s from './TourModal.module.css';
import ITourItem from '../../types/ITourItem';

interface IProps {
  tour: ITourItem;
}

const TourModal = ({ tour }: IProps) => {
  const { description, id, location, photo, price, title } = tour;

  return (
    <div className={s.wrap}>
      <img src={photo} alt={title} className={s.img} />

      <div className={s.content_wrap}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
        <p className={s.description}>Location: {location}.</p>
        <p className={s.price}>${price}</p>
      </div>
    </div>
  );
};

export default TourModal;
