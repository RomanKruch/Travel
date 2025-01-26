import s from './Header.module.css';
import Logo from '../../icons/Logo';
import Navigation from '../../components/Navigation/Navigation';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import { NavLink } from 'react-router-dom';
import BurgerBtn from '../../components/BurgerBtn/BurgerBtn';
import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import UserBar from '../../components/UserBar/UserBar';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(s => !s);
  };

  return (
    <header className={s.header}>
      <NavLink to="/" className={s.logo}>
        <Logo />
      </NavLink>

      <Navigation />

      <div className={s.wrap}>
        <ThemeToggle />

        <UserBar />
      </div>

      <BurgerBtn isOpen={isBurgerMenuOpen} toggleMenu={toggleBurgerMenu} />
      <BurgerMenu isOpen={isBurgerMenuOpen} onClose={toggleBurgerMenu}/>
    </header>
  );
};

export default Header;
