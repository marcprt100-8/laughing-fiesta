// src/components/AddTask.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions'; // Assurez-vous que le chemin est correct
const AddTask = ({ dispatch }) => {
  const [description, setDescription] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      dispatch(addTask(description, isDone));
      setDescription('');
      setIsDone(false);
    }
  };

  return (
    <div>
      <h2>Ajouter une tâche :</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description de la tâche"
        />
        <label>
          Terminée :
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => setIsDone(!isDone)}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default connect()(AddTask);
