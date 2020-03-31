import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Hello from './Hello';

import App from './src/app';
import reducers from './src/reducers';

render(
  <Provider store={createStore(reducers)}>
    <App />, 
  </Provider>,
  document.getElementById('root')
);
