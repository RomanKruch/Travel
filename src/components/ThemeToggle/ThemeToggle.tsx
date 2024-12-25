import s from './ThemeToggle.module.css';
import SunIcon from '../../icons/SunIcon';
import MoonIcon from '../../icons/MoonIcon';

interface IProps {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle = ({ isToggled, setIsToggled }: IProps) => {
  const body = document.querySelector('body')!;

  const getTheme = (state: boolean) => {
    return state ? `${s.toggler} ${s.toggler_toggled}` : s.toggler;
  };

  const onClick = () => {
    setIsToggled(s => {
      if (s) {
        body.classList.remove('dark');
      } else {
        body.classList.add('dark');
      }

      return !s;
    });
  };

  return (
    <>
      <div className={getTheme(isToggled)} onClick={onClick}>
        <div className={s.toggler_mark}>
          {isToggled ? <MoonIcon /> : <SunIcon />}
        </div>
      </div>
    </>
  );
};

export default ThemeToggle;
