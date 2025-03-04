import s from './LoginModal.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import AdvancedInput from '../AdvancedInput/AdvancedInput';
import { validateEmail, validatePassword } from '../../helpers/validation';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onLogin } from '../../redux/user/userOperations';
import Loader from '../Loader/Loader';

type TFormFields = 'email' | 'password';

interface IFormValue {
  email: string;
  password: string;
}

const initialFormValue: IFormValue = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(s => s.user.isLogging);

  const onChange = (field: TFormFields) => {
    return (value: string) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailErr = validateEmail(formValue.email);
    const passwordErr = validatePassword(formValue.password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (!emailErr && !passwordErr) {
      dispatch(onLogin(formValue));
    }
  };

  const onClose = () => {
    navigate('/');
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <h2 className={s.title}>Login</h2>

        <form onSubmit={onSubmit} className={s.form}>
          <AdvancedInput
            placeholder="Email"
            value={formValue.email}
            setValue={onChange('email')}
            error={emailError}
            className={s.inp}
          />

          <AdvancedInput
            placeholder="Password"
            value={formValue.password}
            setValue={onChange('password')}
            error={passwordError}
            className={s.inp}
          />
          {isLogging ? (
            <Loader />
          ) : (
            <Button className={s.btn} type="submit">
              Login
            </Button>
          )}
        </form>

        <p className={s.redirect}>
          Haven't account?{' '}
          <NavLink to="/signup" className={s.redirect_link}>
            Sign Up
          </NavLink>
          !
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
