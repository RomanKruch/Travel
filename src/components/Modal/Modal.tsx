import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import CloseIcon from '../../icons/CloseIcon';

const modalRoot = document.getElementById('modal_root') as HTMLElement;

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element;
}

const Modal = ({ setIsOpen, children }: IProps) => {
  const onClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal}>
        <Button className={s.btn} onClick={() => setIsOpen(false)}>
          <CloseIcon/>
        </Button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
