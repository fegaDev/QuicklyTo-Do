import React,{useEffect} from 'react'
import TaskForm from '../Components/TaskForm'
import {useMyContext} from '../Context/Contexto'
import { useNavigate } from "react-router-dom";
import { cliente } from '../backend/cliente';

const Dashboard = () => {
  const navigate = useNavigate()
  const {getSession} = useMyContext();

  useEffect(() => {
    getSession(navigate);
  },[navigate]);

  const handleOut = () =>{
    cliente.auth.signOut();
    navigate('/')
  }
  return (
    <div className='dashContainer'>
        <h1>Mis tareas</h1>
          <TaskForm/>
          <button className="btnSalir" onClick={handleOut}>SALIR</button>
    </div>
  )
}

export default Dashboard