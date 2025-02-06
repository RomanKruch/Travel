import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

const PrivateRoute = () => {
  const isLogged = useAppSelector(s => s.user.isLogged);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
