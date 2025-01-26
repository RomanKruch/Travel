import { createPortal } from 'react-dom';
import s from './BurgerMenu.module.css';
import Navigation from '../Navigation/Navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import UserBar from '../UserBar/UserBar';

const burgerRoot = document.getElementById('burger_root') as HTMLElement;

interface IProps {
  isOpen: boolean;
  onClose: () => void
}

const BurgerMenu = ({ isOpen, onClose }: IProps) => {
  return createPortal(
    <div className={`${s.menu} ${isOpen ? s.open : ''}`}>
      <Navigation burger={true} onCloseMenu={onClose}/>

      <div className={s.wrap}>
        <ThemeToggle />

        <UserBar />
      </div>
    </div>,
    burgerRoot,
  );
};

export default BurgerMenu;
