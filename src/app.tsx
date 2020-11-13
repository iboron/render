import React from 'react';
import { Provider } from 'react-redux';
import { store } from './models/store';
import './app.scss';

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
