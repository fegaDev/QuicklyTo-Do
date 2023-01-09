import React, { useState,useEffect } from 'react'
import { useMyContext } from '../Context/Contexto'
import TaskItem from '../Components/TaskItem'

const TaskCard = () => {
  const [taskData ,setTaskData] = useState([])
  const {mostrarData} = useMyContext()

  useEffect(() => {
    mostrarData(setTaskData)
  }, [ taskData ]);

  return (taskData.map((taskItem)=> (<TaskItem key={taskItem.id} task={taskItem}/>)));
}

export default TaskCard