import { ReactElement } from 'react';
import s from './Title.module.css';

interface IProps {
  children?: ReactElement | string;
  className?: string;
}

const Title = ({ children, className = '' }: IProps) => {
  return <h2 className={`${s.title} ${className}`}>{children}</h2>;
};

export default Title;
