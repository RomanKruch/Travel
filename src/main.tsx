import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <APIProvider apiKey={import.meta.env.VITE_MAP_API_KEY}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </APIProvider>
    </PersistGate>
  </Provider>,
);
