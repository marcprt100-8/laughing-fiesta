// src/components/TaskList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TaskList = ({ tasks }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'undone') {
      return !task.isDone;
    }
    return true; // 'all' filter
  });

  return (
    <div>
      <h2>Liste des tâches :</h2>
      <div>
        <button onClick={() => setFilter('all')}>Toutes</button>
        <button onClick={() => setFilter('done')}>Faites</button>
        <button onClick={() => setFilter('undone')}>Non faites</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
