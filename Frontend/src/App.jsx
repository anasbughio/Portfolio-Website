import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import SignUp from './components/Signup'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute' // <-- Imported VIP Gate
import './App.css'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function HomeContent() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

// Temporary test component to prove the security gate works
function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#7B88FF] flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-bold mb-2">🛡️ SECURE VAULT</h1>
      <p className="text-slate-400 text-sm">If you are reading this, your JWT Token is valid.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* --- PUBLIC ROUTES --- */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomeContent />} />
      </Route>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />


      {/* --- PROTECTED ROUTES GROUP --- */}
      <Route element={<ProtectedRoute />}>
        
        <Route path="/dashboard" element={<Dashboard />} />
      

      </Route>
    </Routes>
  )
}

export default App