import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Modules/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ToursPage from './pages/ToursPage/ToursPage';
import LoginModal from './components/LoginModal/LoginModal';
import SignUpModal from './components/SignUpModal/SignUpModal';
import TourModal from './components/TourModal/TourModal';
import { onRefresh } from './redux/user/userOperations';
import { useAppDispatch } from './redux/hooks';

function App() {
  const [isDark, setIsDark] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onRefresh());
  }, []);
  return (
    <>
      <Header isToggled={isDark} setIsToggled={setIsDark} />

      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} />}>
          <Route path="login" element={<LoginModal />} />
          <Route path="signup" element={<SignUpModal />} />
        </Route>

        <Route path="tours" element={<ToursPage />}>
          <Route path=":id" element={<TourModal />} />
        </Route>

        {/* <Route path="/bruden/blog" element={<BlogPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
