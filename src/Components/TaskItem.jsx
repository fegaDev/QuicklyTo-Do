import React from 'react'
import { cliente } from '../backend/cliente'

const TaskItem = ({task}) => {
    const handleDelete = async () =>{
        const {error , data} = await cliente.from('Tasks').delete().eq("id", task.id)
        if(error){
            throw error
        }else if (data){
            console.log(data)
        }
    }  
    
  return (
    <div className='itemContainer'>
        <div className='textoContainer'>
        <h3>{task.name}</h3>
        <p>{task.descripcion}</p>
        </div>
        <div className="itemButtonContainer">
        <button onClick={handleDelete}>Listo!</button>
        </div>
    </div>
  )
}
export default TaskItem