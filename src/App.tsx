import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Modules/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ToursPage from './pages/ToursPage/ToursPage';
import LoginModal from './components/LoginModal/LoginModal';
import SignUpModal from './components/SignUpModal/SignUpModal';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Header isToggled={isDark} setIsToggled={setIsDark} />

      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} />}>
          <Route path="login" element={<LoginModal />} />
          <Route path="signup" element={<SignUpModal />} />
        </Route>

        <Route path="/tours" element={<ToursPage />} />

        {/* <Route path="/bruden/blog" element={<BlogPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
