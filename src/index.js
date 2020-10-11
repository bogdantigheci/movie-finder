import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

require('dotenv').config();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
