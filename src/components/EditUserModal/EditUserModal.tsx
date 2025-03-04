import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import s from './EditUserModal.module.css';
import Button from '../Button/Button';
import AdvancedInput from '../AdvancedInput/AdvancedInput';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { validateEmail, validateUsername } from '../../helpers/validation';
import { onEditUser } from '../../redux/user/userOperations';
import Loader from '../Loader/Loader';

type TFormFields = 'name' | 'email';
interface IFormValue {
  name: string;
  email: string;
}

const initFormValue: IFormValue = {
  name: '',
  email: '',
};

const EditUserModal = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(s => s.user.userInfo);
  const isLoading = useAppSelector(s => s.user.isLogging);

  useEffect(() => {
    const { name, email } = userInfo;
    setFormValue({
      name: name ?? '',
      email: email ?? '',
    });
  }, []);

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameErr = validateUsername(formValue.name);
    const emailErr = validateEmail(formValue.email);

    setUsernameError(nameErr);
    setEmailError(emailErr);

    if (!nameErr && !emailErr) {
      dispatch(onEditUser(formValue));
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <h2 className={s.title}>Edit user info</h2>
        <form onSubmit={onSubmit}>
          <AdvancedInput
            placeholder="Name"
            value={formValue.name}
            setValue={onChange('name')}
            className={s.inp}
            error={usernameError}
          />
          <AdvancedInput
            placeholder="Email"
            value={formValue.email}
            setValue={onChange('email')}
            className={s.inp}
            error={emailError}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <Button className={s.btn} type="submit">
              Edit
            </Button>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default EditUserModal;
