import {createAction} from 'redux-act';

export const add = createAction('ADD_TODO', todo => {
  const result = Promise.resolve({id: todo.id, name: (new Date()).toString()});
  return result;
});

