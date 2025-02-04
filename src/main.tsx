import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import App from './App.tsx';
import { API_KEY } from './config/googleMapsAPI.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <APIProvider apiKey={API_KEY}>
        <BrowserRouter basename="/Travel">
          <App />
        </BrowserRouter>
      </APIProvider>
    </PersistGate>
  </Provider>,
);
