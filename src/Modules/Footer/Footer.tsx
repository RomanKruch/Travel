import { NavLink } from 'react-router-dom';
import Logo from '../../icons/Logo';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <NavLink to="/" className={s.logo_wrap}>
        <Logo className={s.logo} />
        TRAVEL
      </NavLink>

      <p className={s.copyright}>© 2025 by Roman Kruch & GPT-chat :)</p>
      <p className={s.copyright}>
        Github:{' '}
        <a className={s.link} href="https://github.com/RomanKruch" target="_blank">
          @RomanKruch
        </a>
      </p>
    </footer>
  );
};

export default Footer;
