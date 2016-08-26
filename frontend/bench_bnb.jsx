import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootReducer from './reducers/root_reducer';

import {requestBenches} from './actions/bench_actions';


window.requestBenches = requestBenches;

window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('root');
  // ReactDOM.render(<Root />, root);
});
