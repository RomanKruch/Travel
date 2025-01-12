import s from './SignUpModal.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import AdvancedInput from '../AdvancedInput/AdvancedInput';
import { validateEmail, validatePassword, validateUsername } from '../../helpers/validation';

type TFormFields = 'username' | 'email' | 'password';

interface IFormValue {
  username: string;
  email: string;
  password: string;
}

const initialFormValue: IFormValue = {
  username: '',
  email: '',
  password: '',
};

const SignUpModal = () => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChange = (field: TFormFields) => {
    return (value: string) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onSubmit = () => {
    const usernameErr = validateUsername(formValue.username)
    const emailErr = validateEmail(formValue.email);
    const passwordErr = validatePassword(formValue.password);
    
    setUsernameError(usernameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (!usernameErr && !emailErr && !passwordErr) {
      console.log('SUBMIT.....');
    }
  };

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Sign Up</h2>

      <form onSubmit={e => e.preventDefault()} className={s.form}>
        <AdvancedInput
          placeholder="Username"
          value={formValue.username}
          setValue={onChange('username')}
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
    </div>
  );
};

export default SignUpModal;
