import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';
import './index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider apiKey="">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </APIProvider>
  </StrictMode>,
);
