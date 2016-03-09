import 'babel-regenerator-runtime';
import expect from 'expect.js';
import store from '../../lib/store';
import * as todoAction from '../../lib/actions/todo';

describe('action', () => {

  it('type', (done) => {
    let todo = {id: 123, name: ''};
    todoAction.add(todo).then(result => {
      let state = store.getState();
      expect(state.todos[0].id).to.be(todo.id);
      done();
    });
  });

});
