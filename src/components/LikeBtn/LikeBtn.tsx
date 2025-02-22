import { useNavigate } from 'react-router-dom';
import LikeIcon from '../../icons/LIkeIcon';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { onLikeTour } from '../../redux/user/userOperations';
import Button from '../Button/Button';
import s from './LikeBtn.module.css';

interface IProps {
  id: string;
  classname?: string;
}

const LikeBtn = ({ id, classname = '' }: IProps) => {
  const likedTours = useAppSelector(s => s.user.likedTours);
  const isInLiked = likedTours.some(tour => tour._id === id);
  const isLogged = useAppSelector(s => s.user.isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLikeBtn = () => {
    if (!isLogged) {
      return navigate('/login');
    }

    dispatch(onLikeTour(id));
  };
  return (
    <Button onClick={onLikeBtn} className={`${s.btn} ${classname}`}>
      <LikeIcon isFilled={isInLiked} />
    </Button>
  );
};

export default LikeBtn;
