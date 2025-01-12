import { v4 as uuid } from 'uuid';
import s from './AdvancedInput.module.css';
import { useRef } from 'react';
import { createClassName } from '../../helpers/createClassName';

interface IProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  className?: string;
}

const AdvancedInput = ({
  placeholder,
  value,
  setValue,
  error = '',
  className = '',
}: IProps) => {
  const id = useRef(uuid());

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.input_wrap + ' ' + className}>
      <input
        className={createClassName(s.input, s.input_error, !!error)}
        type="text"
        id={id.current}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label
        className={createClassName(s.label, s.label_error, !!error)}
        htmlFor={id.current}
      >
        {placeholder}
      </label>
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default AdvancedInput;
