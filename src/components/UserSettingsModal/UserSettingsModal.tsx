import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import s from './UserSettingsModal.module.css';
import EditIcon from '../../icons/EditIcon';

const UserSettingsModal = () => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate('/user');
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.wrap}>
        <h2 className={s.title}>Setting</h2>
        <nav className={s.navigation}>
          <NavLink to="/user/edit" className={s.link}>
            Edit userinfo
            <EditIcon classname={s.icon} />
          </NavLink>

          <NavLink to="/user/changePassword" className={s.link}>
            Change password
            <EditIcon classname={s.icon} />
          </NavLink>

          <NavLink to="/user/deleteAccount" className={s.link}>
            Delete account...
          </NavLink>
        </nav>
      </div>
    </Modal>
  );
};

export default UserSettingsModal;
