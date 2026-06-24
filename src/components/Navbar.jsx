import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll Spy Hook: Tracks the viewport and updates activeSection automatically
  useEffect(() => {
    const handleScroll = () => {
      // If user is at the very top of the page, lock to 'home'
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      const sections = ['home', 'projects', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200; // 200px offset accounts for the sticky header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount to establish initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-900/80 text-slate-100 font-sans select-none transition-all">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={() => setActiveSection('home')}
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#B4BCFF] hover:opacity-90 transition-opacity"
        >
         Anas
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
          
          {/* HOME */}
          <a 
            href="#home" 
            onClick={() => setActiveSection('home')}
            className={`relative py-1 cursor-pointer transition-colors ${
              activeSection === 'home' ? 'text-[#B4BCFF] font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Home</span>
            {activeSection === 'home' && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#7B88FF] rounded-full"></span>
            )}
          </a>

          {/* PROJECTS */}
          <a 
            href="#projects" 
            onClick={() => setActiveSection('projects')}
            className={`relative py-1 cursor-pointer transition-colors ${
              activeSection === 'projects' ? 'text-[#B4BCFF] font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Projects</span>
            {activeSection === 'projects' && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#7B88FF] rounded-full"></span>
            )}
          </a>

          {/* ABOUT */}
          <a 
            href="#about" 
            onClick={() => setActiveSection('about')}
            className={`relative py-1 cursor-pointer transition-colors ${
              activeSection === 'about' ? 'text-[#B4BCFF] font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>About</span>
            {activeSection === 'about' && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#7B88FF] rounded-full"></span>
            )}
          </a>

          {/* SKILLS */}
          <a 
            href="#skills" 
            onClick={() => setActiveSection('skills')}
            className={`relative py-1 cursor-pointer transition-colors ${
              activeSection === 'skills' ? 'text-[#B4BCFF] font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Skills</span>
            {activeSection === 'skills' && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#7B88FF] rounded-full"></span>
            )}
          </a>

          {/* CONTACT */}
          <a 
            href="#contact" 
            onClick={() => setActiveSection('contact')}
            className={`relative py-1 cursor-pointer transition-colors ${
              activeSection === 'contact' ? 'text-[#B4BCFF] font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Contact</span>
            {activeSection === 'contact' && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#7B88FF] rounded-full"></span>
            )}
          </a>

        </nav>

        {/* Right Action Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            to={"/login"} 
            className="text-sm font-bold text-slate-300 hover:text-[#7B88FF] transition-colors cursor-pointer"
          >
            Login
          </Link>
          <Link
            to={"/signup"} 
            className="text-sm font-bold text-slate-300 hover:text-[#7B88FF] transition-colors cursor-pointer"
          >
           Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-400 hover:text-[#B4BCFF] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* ================= MOBILE DROPDOWN (Synced with state) ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17] border-b border-slate-800 px-6 py-6 space-y-3 shadow-2xl animate-fadeIn">
          
          <a 
            href="#home" 
            onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }}
            className={`block text-base py-1 pl-3 transition-colors ${
              activeSection === 'home' ? 'text-[#B4BCFF] font-bold border-l-2 border-[#7B88FF]' : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            Home
          </a>

          <a 
            href="#projects" 
            onClick={() => { setActiveSection('projects'); setMobileMenuOpen(false); }}
            className={`block text-base py-1 pl-3 transition-colors ${
              activeSection === 'projects' ? 'text-[#B4BCFF] font-bold border-l-2 border-[#7B88FF]' : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            Projects
          </a>

          <a 
            href="#about" 
            onClick={() => { setActiveSection('about'); setMobileMenuOpen(false); }}
            className={`block text-base py-1 pl-3 transition-colors ${
              activeSection === 'about' ? 'text-[#B4BCFF] font-bold border-l-2 border-[#7B88FF]' : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            About
          </a>

          <a 
            href="#skills" 
            onClick={() => { setActiveSection('skills'); setMobileMenuOpen(false); }}
            className={`block text-base py-1 pl-3 transition-colors ${
              activeSection === 'skills' ? 'text-[#B4BCFF] font-bold border-l-2 border-[#7B88FF]' : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            Skills
          </a>

          <a 
            href="#contact" 
            onClick={() => { setActiveSection('contact'); setMobileMenuOpen(false); }}
            className={`block text-base py-1 pl-3 transition-colors ${
              activeSection === 'contact' ? 'text-[#B4BCFF] font-bold border-l-2 border-[#7B88FF]' : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            Contact
          </a>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
            <Link
              to={"/login"}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-slate-300 hover:text-white pl-3"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#B4BCFF] text-[#0B0F17] font-bold text-sm px-5 py-2.5 rounded-lg text-center flex-1 shadow"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}