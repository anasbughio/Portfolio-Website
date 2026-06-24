import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import SignUp from './components/Signup'
import Login from './components/Login'
import './App.css'

function HomeContent() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeContent />} />
      </Route>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  )
}

export default App