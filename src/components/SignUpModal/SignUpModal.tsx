import s from './SignUpModal.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import AdvancedInput from '../AdvancedInput/AdvancedInput';
import { validateEmail, validatePassword, validateUsername } from '../../helpers/validation';
import Modal from '../Modal/Modal';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { onSignUp } from '../../redux/user/userOperations';

type TFormFields = 'name' | 'email' | 'password';

interface IFormValue {
  name: string;
  email: string;
  password: string;
}

const initialFormValue: IFormValue = {
  name: '',
  email: '',
  password: '',
};

const SignUpModal = () => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onChange = (field: TFormFields) => {
    return (value: string) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onSubmit = () => {
    const nameErr = validateUsername(formValue.name);
    const emailErr = validateEmail(formValue.email);
    const passwordErr = validatePassword(formValue.password);

    setUsernameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (!nameErr && !emailErr && !passwordErr) {
      dispatch(onSignUp(formValue))
    }
  };

  const onClose = () => {
    navigate('/');
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <h2 className={s.title}>Sign Up</h2>

        <form onSubmit={e => e.preventDefault()} className={s.form}>
          <AdvancedInput
            placeholder="Username"
            value={formValue.name}
            setValue={onChange('name')}
            error={usernameError}
            className={s.inp}
          />

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

          <Button className={s.btn} onClick={onSubmit}>
            Sign Up
          </Button>
        </form>

        <p className={s.redirect}>
          Already have account?{'  '}
          <NavLink to="/login" className={s.redirect_link}>
            Log in
          </NavLink>
          !
        </p>
      </div>
    </Modal>
  );
};

export default SignUpModal;
