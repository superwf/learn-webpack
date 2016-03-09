import {connect} from 'react-redux';

import React from 'react'
import * as actions from '../actions/todo';



export const Todo = function(props) {
  let li = props.todos.map(todo => <li key={todo.id}>{todo.name}</li>);
  return <div>
    <button onClick={() => actions.add({name: Math.random(), id: Math.random()})}>add</button>
    <ul>{li}</ul>
  </div>;
};
export default connect(state => ({todos: state.todos}), actions)(Todo);
