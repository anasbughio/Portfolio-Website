import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17] text-slate-100 py-12 px-6 md:px-12 font-sans select-none border-t border-slate-900/80">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        <div className="space-y-1.5">
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white block">
            Anas
          </span>
          <p className="text-xs text-slate-400 font-normal">
            © {new Date().getFullYear()} Anas Bughio. Designed for the technical mind.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
          
          <a 
            href="https://github.com/anasbughio" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#B4BCFF] transition-colors cursor-pointer block py-1"
          >
            Github
          </a>

          <a 
            href="https://linkedin.com/in/anasbughio" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#B4BCFF] transition-colors cursor-pointer block py-1"
          >
            Linkedin
          </a>
        </div>

      </div>
    </footer>
  );
}