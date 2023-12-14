// src/components/Task.js
import React, { useState } from 'react';
import EditTask from './EditTask';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <span>{task.description}</span>
      <span>{task.isDone ? ' - Terminée' : ' - En cours'}</span>
      <button onClick={handleEditClick}>Modifier</button>
      {isEditing && <EditTask task={task} onCancel={() => setIsEditing(false)} />}
    </div>
  );
};

export default Task;
