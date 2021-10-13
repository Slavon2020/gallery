import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import {store} from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);