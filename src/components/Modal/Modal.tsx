import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import CloseIcon from '../../icons/CloseIcon';
import { useState } from 'react';

const modalRoot = document.getElementById('modal_root') as HTMLElement;

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element;
}

const Modal = ({ setIsOpen, children }: IProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const onClickOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onClose =  () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return createPortal(
    <div
      className={`${s.overlay} ${isClosing ? s.overlay_closing : ''}`}
      onClick={onClickOver}
    >
      <div className={`${s.modal} ${isClosing ? s.modal_closing : ''}`}>
        <Button className={s.btn} onClick={onClose}>
          <CloseIcon />
        </Button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
