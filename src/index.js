//styles
import './index.css';

//
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store';

import App from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
