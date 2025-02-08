import { useNavigate } from 'react-router-dom';
import LikeIcon from '../../icons/LIkeIcon';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { onDeleteFromLike, onAddToLike } from '../../redux/user/userOperations';
import Button from '../Button/Button';
import s from './LikeBtn.module.css';

interface IProps {
  id: string;
  classname?: string;
}

const LikeBtn = ({ id, classname = '' }: IProps) => {
  const isInLiked = useAppSelector(state => state.user.likedTours.some(tour => tour.id === id));
  const isLogged = useAppSelector(s => s.user.isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLikeBtn = () => {
    if (!isLogged) {
      return navigate('/login');
    }

    if (isInLiked) {
      dispatch(onDeleteFromLike(id));
    } else {
      dispatch(onAddToLike(id));
    }
  };
  return (
    <Button onClick={onLikeBtn} className={`${s.btn} ${classname}`}>
      <LikeIcon isFilled={isInLiked} />
    </Button>
  );
};

export default LikeBtn;
