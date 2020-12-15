// tslint:disable
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';

import App from './App';

ReactDOM.render(
  <BrowserRouter >
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
