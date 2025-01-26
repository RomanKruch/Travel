import s from './BurgerBtn.module.css';

interface IProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function BurgerBtn({ isOpen, toggleMenu }: IProps) {
  return (
    <button
      className={`${s.burgerBtn} ${isOpen ? s.open : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </button>
  );
}

export default BurgerBtn;
