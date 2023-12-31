import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoaderProvider from 'context/LoaderProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/autoria">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
