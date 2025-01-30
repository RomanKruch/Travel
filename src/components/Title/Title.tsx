import { ReactElement } from 'react';
import s from './Title.module.css';

interface IProps {
  children?: ReactElement | string;
}

const Title = ({ children }: IProps) => {
  return <h2 className={s.title}>{children}</h2>;
};

export default Title;
