import {createAction} from 'redux-act';

export const add = createAction(todo => {
  const result = Promise.resolve({id: todo.id, name: (new Date()).toString()});
  return result;
});
