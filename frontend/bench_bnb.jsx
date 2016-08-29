import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import RootReducer from './reducers/root_reducer';


import {fetchBenches} from './util/bench_api_util';

import {requestBenches} from './actions/bench_actions';

window.fetchBenches = fetchBenches;
window.requestBenches = requestBenches;

window.Store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
