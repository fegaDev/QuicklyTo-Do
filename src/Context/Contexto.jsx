import { createContext, useContext,useState } from "react";
import { cliente } from "../backend/cliente";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export const Contexto = createContext();

export const useMyContext = () => {
  const context = useContext(Contexto);
  return context;
};

const handleSubmit = async (email) => {
  const rest = await cliente.auth.signInWithOtp({
    email,
  });
  if(rest.error === null){
    const alerta = withReactContent(Swal)
    alerta.fire('Listo','Revisa tu bandeja','success')
  }
};

const getSession= async (navigate) =>{
        const rest = await cliente.auth.getSession();
        if(rest.data.session === null){
          navigate('/')
        }else{
          navigate('/dashboard');
        }
}
const getData = async (TaskName,TaskDesc,setTaskName,setTaskDesc) =>{
  const data = await cliente.auth.getUser();
  const id = data.data.user.id;
    const rest = await cliente.from('Tasks').insert({
      name : TaskName,
      descripcion : TaskDesc,
      userId : id,
    })
    console.log(rest)
    setTaskName('')
    setTaskDesc('')
}

const mostrarData = async (setTaskData) =>{
  const data = await cliente.auth.getUser();
  const id = data.data.user.id;
  const rest = await cliente.from('Tasks').select().eq("userId", id);
  const misDatos = rest.data;
  setTaskData([...misDatos])
}

export const ContextoProvider = ({ children }) => {
  return (
    <Contexto.Provider value={{handleSubmit,
    getSession,
    getData,
    mostrarData,
    }}>
      {children}
    </Contexto.Provider>
  );
};
