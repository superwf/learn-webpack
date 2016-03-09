import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Todo from './lib/containers/Todo';
import {Router, hashHistory, Route} from 'react-router';
import {Provider} from 'react-redux';
import store from './lib/store';

let main = document.querySelector('#main');

render(<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={Todo} />
  </Router>
</Provider>, main);


// render(<Provider store={store}>
//   <Todo />
// </Provider>, main);
