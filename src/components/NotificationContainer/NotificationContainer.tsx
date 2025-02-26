import { useAppSelector } from '../../redux/hooks';
import s from './NotificationContainer.module.css';
import { createPortal } from 'react-dom';
import Notification from '../Notification/Notification';

const notificationRoot = document.getElementById('notification_root') as HTMLElement;

export const NotificationContainer = () => {
  const notifications = useAppSelector(state => state.notifications.notifications);

  return createPortal(
    <div className={s.container}>
      {notifications.map(n => (
        <Notification key={n.id} item={n} />
      ))}
    </div>,
    notificationRoot,
  );
};
