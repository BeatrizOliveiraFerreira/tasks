import React, { useState } from 'react';
import Task from './Task';

type TaskType = {
  id: number;
  title: string;
  description: string;
};

const Tarefa: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState<TaskType>({ id: 1, title: '', description: '' });

  const addTask = () => {
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { ...newTask }]);
      setNewTask({ id: newTask.id + 1, title: '', description: '' });
    }
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <div className="task-input">
        <input
          type="text"
          placeholder="Título"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          className='descrever'
          type="text"
          placeholder="Descrição"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button className="criar" onClick={addTask}>Adicionar</button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Tarefa;
