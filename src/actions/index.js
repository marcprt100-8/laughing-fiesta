// src/actions/index.js
export const addTask = (description, isDone) => ({
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime(),
      description,
      isDone,
    },
  });
  
  export const editTask = (taskId, description) => ({
    type: 'EDIT_TASK',
    payload: {
      id: taskId,
      description,
    },
  });
  