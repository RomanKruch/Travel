import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

interface IActiveClass {
  isActive: boolean;
}

const Navigation = () => {
  const activeClass = ({ isActive }: IActiveClass) =>
    isActive ? `${s.link} ${s.link_active}` : s.link;

  return (
    <nav className={s.navigation}>
      <NavLink to="/" className={activeClass} end>
        Home
      </NavLink>
      <NavLink to="/tours" className={activeClass} end>
        Tours
      </NavLink>
      <NavLink to="/about" className={activeClass} end>
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
