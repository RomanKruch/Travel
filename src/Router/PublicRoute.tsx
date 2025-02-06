import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

const PublicRoute = () => {
  const isLogged = useAppSelector(s => s.user.isLogged);
  return !isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
