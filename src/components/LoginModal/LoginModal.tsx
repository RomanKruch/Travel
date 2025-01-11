import s from './LoginModal.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import AdvancedInput from '../AdvancedInput/AdvancedInput';

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
    setEmailError(validateEmail(formValue.email));
    setPasswordError(validatePassword(formValue.password));

    if (!emailError && !passwordError) {
      console.log('SUBMIT.....');
    }
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email is invalid!';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return 'Password is required!';
    } else if (password.length < 8) {
      return 'Password must be at least 8 characters long!';
    }
    return '';
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
        />

        <AdvancedInput
          placeholder="Password"
          value={formValue.password}
          setValue={onChange('password')}
          error={passwordError}
        />
        {/* <label className={s.label}>
          Email:
          <Input
            value={formValue.email}
            setValue={onChange('email')}
            text="Your email..."
          />
        </label>
        <label className={s.label}>
          Password:
          <Input
            value={formValue.password}
            setValue={onChange('password')}
            text="Your password..."
          />
        </label> */}

        <Button onClick={onSubmit}>Login</Button>
      </form>
    </div>
  );
};

export default LoginModal;
