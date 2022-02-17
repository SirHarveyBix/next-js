import { useContext } from 'react';
import { NotificationContext } from '../../store/notificationContext';
import Notification from '../notification/Notification';
import MainHeader from './MainHeader';

function Layout(props) {
  const notificationctx = useContext(NotificationContext);
  const acitveNotification = notificationctx.notification;

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {acitveNotification && (
        <Notification
          title={acitveNotification.title}
          message={acitveNotification.message}
          status={acitveNotification.status}
        />
      )}
    </>
  );
}
export default Layout;
