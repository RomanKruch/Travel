import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Modules/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ToursPage from './pages/ToursPage/ToursPage';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Header isToggled={isDark} setIsToggled={setIsDark} />

      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} />} />

        <Route path="/tours" element={<ToursPage />} />

        {/* <Route path="/bruden/blog" element={<BlogPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
