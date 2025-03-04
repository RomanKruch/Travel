import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import s from './ChangePasswordModal.module.css';
import Button from '../Button/Button';
import AdvancedInput from '../AdvancedInput/AdvancedInput';
import { useState } from 'react';
import { validatePassword } from '../../helpers/validation';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { addNotification } from '../../redux/notifications/notificationsSlice';
import { useAppDispatch } from '../../redux/hooks';

type TFormFields = 'oldPassword' | 'newPassword';
interface IFormValue {
  oldPassword: string;
  newPassword: string;
}

const initFormValue: IFormValue = {
  oldPassword: '',
  newPassword: '',
};

const ChangePasswordModal = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [isLoading, setIsLoading] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClose = () => {
    navigate('/user');
  };

  const onChange = (field: TFormFields) => {
    return (value: string) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const oldErr = validatePassword(formValue.oldPassword);
    const newErr = validatePassword(formValue.newPassword);

    setOldPasswordError(oldErr);
    setNewPasswordError(newErr);

    if (!oldErr && !newErr) {
      setIsLoading(true);
      try {
        const { data } = await axios.patch('/users/changePassword', formValue);
        console.log(data);
        dispatch(addNotification({ message: data.message, type: 'success' }));
      } catch (err: any) {
        const { message } = err?.response.data;
        dispatch(addNotification({ message, type: 'error' }));
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <h2 className={s.title}>Change password</h2>
        <form onSubmit={onSubmit}>
          <AdvancedInput
            placeholder="Old password"
            value={formValue.oldPassword}
            setValue={onChange('oldPassword')}
            className={s.inp}
            error={oldPasswordError}
          />
          <AdvancedInput
            placeholder="New password"
            value={formValue.newPassword}
            setValue={onChange('newPassword')}
            className={s.inp}
            error={newPasswordError}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <Button className={s.btn} type="submit">
              Change
            </Button>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
