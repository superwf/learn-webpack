import {createReducer} from 'redux-act';
import * as actions from '../actions/todo';

const todoReducer = createReducer({
  [actions.add]: (state, payload) => Object.assign({}, {
    todos: state.todos.concat(payload)
  })
}, {todos: []});

export default todoReducer;
