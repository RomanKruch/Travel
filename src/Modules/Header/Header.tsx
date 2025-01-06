import s from './Header.module.css';
import Logo from '../../icons/Logo';
import Navigation from '../../components/Navigation/Navigation';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import { NavLink } from 'react-router-dom';

interface IProps {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isToggled, setIsToggled }: IProps) => {
  return (
    <header className={s.header}>
      <NavLink to="/" className={s.logo}>
        <Logo />
      </NavLink>

      <Navigation />

      <ThemeToggle isToggled={isToggled} setIsToggled={setIsToggled} />
    </header>
  );
};

export default Header;
