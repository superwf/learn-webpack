import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import {assignAll} from 'redux-act';
import todos from './reducers/todos';
import * as actions from './actions/todo';

let store = compose(
  applyMiddleware(promiseMiddleware),
  window && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
store = store(todos);
assignAll(actions, store);


export default store;
