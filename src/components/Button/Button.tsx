import { ReactElement } from 'react';
import s from './Button.module.css';

interface IProps {
  className?: string;
  onClick?: () => void;
  children?: ReactElement | string;
}

const Button = ({ onClick, className = '', children }: IProps) => {
  return (
    <button
      className={className ? s.btn + ' ' + className : s.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
