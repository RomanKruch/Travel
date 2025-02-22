import { ReactElement } from 'react';
import s from './Button.module.css';

interface IProps {
  className?: string;
  onClick?: () => void;
  children?: ReactElement | string;
  disabled?: boolean;
}

const Button = ({ onClick, className = '', children, disabled = false }: IProps) => {
  return (
    <button
      className={className ? s.btn + ' ' + className : s.btn}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
