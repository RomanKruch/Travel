import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <a href="/" className={s.link}>Home</a>
        </li>
        <li>
          <a href="/" className={s.link}>Routes</a>
        </li>
        <li>
          <a href="/" className={s.link}>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
