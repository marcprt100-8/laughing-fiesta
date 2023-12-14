// src/components/EditTask.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions';

const EditTask = ({ task, dispatch, onCancel }) => {
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    dispatch(editTask(task.id, editedDescription));
    onCancel();
  };

  return (
    <div>
      <input
        type="text"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <button onClick={handleSave}>Enregistrer</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default connect()(EditTask);
