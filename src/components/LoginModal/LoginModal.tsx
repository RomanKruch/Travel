import s from './LoginModal.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import AdvancedInput from '../AdvancedInput/AdvancedInput';
import { validateEmail, validatePassword } from '../../helpers/validation';

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

  const onChange = (field: TFormFields) => {
    return (value: string) =>
      setFormValue(s => {
        const newState = { ...s, [field]: value };
        return newState;
      });
  };

  const onSubmit = () => {
    const emailErr = validateEmail(formValue.email);
    const passwordErr = validatePassword(formValue.password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (!emailErr && !passwordErr) {
      console.log('SUBMIT.....');
    }
  };

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Login</h2>

      <form onSubmit={e => e.preventDefault()} className={s.form}>
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginModal;
