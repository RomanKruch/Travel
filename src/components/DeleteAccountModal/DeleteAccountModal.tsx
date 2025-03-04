import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import s from './DeleteAccountModal.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { addNotification } from '../../redux/notifications/notificationsSlice';
import { useAppDispatch } from '../../redux/hooks';
import { onAccDelete } from '../../redux/user/userSlice';

const DeleteAccountModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClose = () => {
    navigate('/user');
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { data } = await axios.delete('/users/deleteAccount');
      dispatch(addNotification({ message: data.message, type: 'success' }));
      dispatch(onAccDelete());
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <h2 className={s.title}>Are you really want to DELETE your account?</h2>
        <form className={s.form} onSubmit={onSubmit}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Button className={s.btn} onClick={onClose}>
                No
              </Button>
              <Button className={s.btn} type="submit">
                Yes
              </Button>
            </>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
