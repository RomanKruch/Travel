import { createPortal } from 'react-dom';
import s from './ErrorMassage.module.css';
import IErrorItem from './IErrorItem';

const notificationRoot = document.getElementById('notification_root') as HTMLElement;

interface IProps {
  errorItem: IErrorItem;
}
const ErrorMassage = ({ errorItem }: IProps) => {
  return createPortal(
    <p className={s.error_text}>{errorItem.errorText}</p>,
    notificationRoot,
  );
};

export default ErrorMassage;
