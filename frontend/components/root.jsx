import React from 'react';
import { Provider } from 'react-redux';
import SearchContainer from './search_container';
import AppRouter from './router';

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

export default Root;
