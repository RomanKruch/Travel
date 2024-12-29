import s from './Input.module.css';

// type setString = (value: string) => void;
// type setNumber = (value: number) => void;

interface IProps {
  text?: string;
  className?: string;
  value: string | number;
  setValue: (v: any) => void;
  number?: boolean;
}

const Input = ({
  text = '',
  className = '',
  value,
  setValue,
  number,
}: IProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (number) setValue(+e.target.value);
    else setValue(e.target.value);
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
