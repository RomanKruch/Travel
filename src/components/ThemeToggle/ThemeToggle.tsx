import s from './ThemeToggle.module.css';
import SunIcon from '../../icons/SunIcon';
import MoonIcon from '../../icons/MoonIcon';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeTheme } from '../../redux/theme/themeSlice';

const ThemeToggle = () => {
  const isDark = useAppSelector(s => s.theme.isDark);
  const dispatch = useAppDispatch();

  const getTheme = (state: boolean) => {
    return state ? `${s.toggler} ${s.toggler_toggled}` : s.toggler;
  };

  const onClick = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <div className={getTheme(isDark)} onClick={onClick}>
        <div className={s.toggler_mark}>{isDark ? <MoonIcon /> : <SunIcon />}</div>
      </div>
    </>
  );
};

export default ThemeToggle;
