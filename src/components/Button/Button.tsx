import { ReactElement } from 'react';
import s from './Button.module.css';

interface IProps {
  className?: string;
  onClick?: () => void;
  children?: ReactElement | string;
  disabled?: boolean;
  type?: 'submit' | 'button';
}

const Button = ({
  onClick,
  className = '',
  children,
  disabled = false,
  type = 'button',
}: IProps) => {
  return (
    <button
      className={className ? s.btn + ' ' + className : s.btn}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
