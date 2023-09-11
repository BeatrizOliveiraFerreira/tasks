import React from 'react';
import trash from './assets/trash.png';

type TaskProps = {
  task: {
    id: number;
    title: string;
    description: string;
  };
  onDelete: (id: number) => void;
};

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    
    <div className="task">
      <h3>{task.title}</h3>
      <img
        className="delete-icon"
        src={trash}
        alt="lixeira"
        onClick={() => onDelete(task.id)}
      />
      <p>{task.description}</p>
      
    </div>
  );
};

export default Task;
