import 'babel-regenerator-runtime';
import expect from 'expect.js';
import store from '../../lib/store';
import * as todoAction from '../../lib/actions/todo';

describe('todo action', () => {

  it('add', async () => {
    let todo = {id: 123, name: ''};
    let state = store.getState();
    expect(state.todos.length).to.be(0);
    await todoAction.add(todo);

    state = store.getState();
    expect(state.todos[0].id).to.be(todo.id);
  });

});
