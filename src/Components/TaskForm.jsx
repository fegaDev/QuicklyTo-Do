import React, { useState } from "react";
import TaskCard from "../Components/TaskCard";
import { useMyContext } from "../Context/Contexto";

const TaskForm = () => {
  const { getData } = useMyContext();
  const [TaskName, setTaskName] = useState();
  const [TaskDesc, setTaskDesc] = useState();

  const handleData = () => {
    getData(TaskName, TaskDesc);
    setTaskName('');
    setTaskDesc('');
  };
  return (
    <div className="taskFormContainer">
      <div className="taskFormInputContainer">
        <input
          className="inputName"
          type="text"
          name="tarea"
          placeholder="TAREA"
          onChange={(e) => setTaskName(e.target.value)}
          value={TaskName}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="DESCRIPCIÓN"
          onChange={(e) => setTaskDesc(e.target.value)}
          value={TaskDesc}
        />
      <button className='btnAgregar' onClick={handleData}>AGREGAR</button>
      </div>
      <div className="taskCardContainer">
        <TaskCard />
      </div>
    </div>
  );
};
export default TaskForm;
