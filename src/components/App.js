// src/components/App.js
import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  return (
    <div>
      <h1>Application ToDo</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
