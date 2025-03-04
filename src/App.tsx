import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Modules/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ToursPage from './pages/ToursPage/ToursPage';
import LoginModal from './components/LoginModal/LoginModal';
import SignUpModal from './components/SignUpModal/SignUpModal';
import TourModal from './components/TourModal/TourModal';
import { onRefresh } from './redux/user/userOperations';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import UserPage from './pages/UserPage/UserPage';
import Footer from './Modules/Footer/Footer';
import PrivateRoute from './Router/PrivateRoute';
import PublicRoute from './Router/PublicRoute';
import './config/axiosConfig';
import { NotificationContainer } from './components/NotificationContainer/NotificationContainer';
import UserSettingsModal from './components/UserSettingsModal/UserSettingsModal';
import EditUserModal from './components/EditUserModal/EditUserModal';
import ChangePasswordModal from './components/ChangePasswordModal/ChangePasswordModal';
import DeleteAccountModal from './components/DeleteAccountModal/DeleteAccountModal';

const body = document.querySelector('body')!;

function App() {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(s => s.theme.isDark);

  useEffect(() => {
    dispatch(onRefresh());
  }, []);

  useEffect(() => {
    if (!isDark) {
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
    }
  }, [isDark]);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginModal />} />
            <Route path="signup" element={<SignUpModal />} />
          </Route>

          <Route path=":id" element={<TourModal />} />
        </Route>

        <Route path="tours" element={<ToursPage />}>
          <Route path=":id" element={<TourModal />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="user" element={<UserPage />}>
            <Route path="settings" element={<UserSettingsModal />} />
            <Route path="edit" element={<EditUserModal />} />
            <Route path="changePassword" element={<ChangePasswordModal />} />
            <Route path="deleteAccount" element={<DeleteAccountModal />} />
            <Route path=":id" element={<TourModal />} />
          </Route>
        </Route>
      </Routes>

      <Footer />

      <NotificationContainer />
    </>
  );
}

export default App;
