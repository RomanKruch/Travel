import s from './Input.module.css';

interface IProps {
  text?: string;
  className?: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ text = '', className = '', value, setValue }: IProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      placeholder={text}
      value={value}
      onChange={onChange}
      className={className ? s.input + ' ' + className : s.input}
    />
  );
};

export default Input;
