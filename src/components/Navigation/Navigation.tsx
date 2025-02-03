import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

interface IProps {
  burger?: boolean;
  onCloseMenu?: () => void;
}

interface IActiveClass {
  isActive: boolean;
}

const Navigation = ({ burger = false, onCloseMenu = () => {} }: IProps) => {
  const activeClass = ({ isActive }: IActiveClass) =>
    isActive ? `${s.link} ${s.link_active}` : s.link;

  const onClick = () => {
    if (burger) {
      onCloseMenu();
    }
  };

  return (
    <nav className={`${s.navigation} ${burger ? s.burgerMenu : ''}`}>
      <NavLink to="/" className={activeClass} end onClick={onClick}>
        Home
      </NavLink>
      <NavLink to="/tours" className={activeClass} end onClick={onClick}>
        Tours
      </NavLink>
    </nav>
  );
};

export default Navigation;
