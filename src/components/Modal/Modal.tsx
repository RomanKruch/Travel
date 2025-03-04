import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import CloseIcon from '../../icons/CloseIcon';
import { useState } from 'react';
import Loader from '../Loader/Loader';

const modalRoot = document.getElementById('modal_root') as HTMLElement;

interface IProps {
  onClose: () => void;
  children?: JSX.Element;
  loading?: boolean;
}

const Modal = ({ onClose, children, loading = false }: IProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const onClickOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  const onClick = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return createPortal(
    <div className={`${s.overlay} ${isClosing ? s.overlay_closing : ''}`} onMouseDown={onClickOver}>
      {loading ? (
        <Loader />
      ) : (
        <div className={`${s.modal} ${isClosing ? s.modal_closing : ''}`}>
          <Button className={s.btn} onClick={onClick}>
            <CloseIcon />
          </Button>
          {children}
        </div>
      )}
    </div>,
    modalRoot,
  );
};

export default Modal;
