import { Routes, Route } from 'react-router-dom'
import SignUp from './components/Signup'
import Login from './components/Login'
import './App.css'
import Hero from './components/Hero'

function App() {
  return (
    <>
      
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/"  element={<Hero/>}/> 
    </Routes>
    </>
  )
}

export default App