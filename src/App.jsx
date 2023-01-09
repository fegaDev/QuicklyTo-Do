import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ContextoProvider } from './Context/Contexto'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <div className="App">
      <ContextoProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </ContextoProvider>
    </div>
  )
}

export default App
