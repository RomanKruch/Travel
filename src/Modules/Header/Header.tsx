import s from './Header.module.css';
import Logo from '../../icons/Logo';
import Navigation from '../../components/Navigation/Navigation';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import { NavLink } from 'react-router-dom';
import UserInfo from '../../components/UserInfo/UserInfo';
import Button from '../../components/Button/Button';
import { useAppSelector } from '../../redux/hooks';


const Header = () => {
  const isLogged = useAppSelector(s => s.user.isLogged);

  return (
    <header className={s.header}>
      <NavLink to="/" className={s.logo}>
        <Logo />
      </NavLink>

      <Navigation />

      <div className={s.wrap}>
        <ThemeToggle />

        {isLogged ? (
          <UserInfo />
        ) : (
          <NavLink to="/login">
            <Button>Log in</Button>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
