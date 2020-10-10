import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { getUsers } from './actions/users';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(getUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
