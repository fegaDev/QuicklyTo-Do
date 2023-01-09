import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { cliente } from '../backend/cliente';
import { useMyContext } from '../Context/Contexto'

const Home = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  
  const {handleSubmit} = useMyContext();

  const handleEnviar = (event)=>{
    event.preventDefault();
      handleSubmit(email)
  }

  useEffect(() => {
    cliente.auth.onAuthStateChange((event,session)=>{
      if (event == 'SIGNED_IN') {
        navigate('/dashboard')
      }else{
        navigate('/')
      }
    })
  }, [handleEnviar]);

  return (
    <div className='homeContainer'>
        <h1>Bienvenido</h1>
        <input type="email" name='email' placeholder='tu-correo@correo.com' onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleEnviar}>Enviar</button>
    </div>
  )
}

export default Home