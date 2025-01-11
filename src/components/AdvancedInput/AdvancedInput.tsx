import { v4 as uuid } from 'uuid';
import s from './AdvancedInput.module.css';
import { useRef, } from 'react';

interface IProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
}

const AdvancedInput = ({
  placeholder,
  value,
  setValue,
  error = '',
}: IProps) => {
  const id = useRef(uuid());

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.input_wrap}>
      <input
        className={`${s.input} ${error ? s.input_error : ''}`}
        type="text"
        id={id.current}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label
        className={`${s.label} ${error ? s.label_error : ''}`}
        htmlFor={id.current}
      >
        {placeholder}
      </label>
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default AdvancedInput;
