import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0B0F17] text-slate-100 py-28 px-6 md:px-12 font-sans select-none border-t border-slate-900/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching image_7cb424.png */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#B4BCFF] tracking-tight">
           Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            The tools I use to build the future.
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          
          
          <div className="group bg-[#111622] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#1B2234] flex items-center justify-center mb-5 text-[#B4BCFF] group-hover:bg-[#7B88FF] group-hover:text-[#0B0F17] transition-all duration-300 shadow-inner">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                <ellipse cx="12" cy="12" rx="10" ry="4" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white tracking-wide mb-1.5 group-hover:text-[#B4BCFF] transition-colors">
              React
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-[#7B88FF] uppercase font-bold">
              EXPERT
            </span>
          </div>

          <div className="group bg-[#111622] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#1B2234] flex items-center justify-center mb-5 text-[#B4BCFF] group-hover:bg-[#7B88FF] group-hover:text-[#0B0F17] transition-all duration-300 shadow-inner">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white tracking-wide mb-1.5 group-hover:text-[#B4BCFF] transition-colors">
              Node.js
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-[#7B88FF] uppercase font-bold">
              ARCHITECT
            </span>
          </div>

          <div className="group bg-[#111622] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#1B2234] flex items-center justify-center mb-5 text-[#B4BCFF] group-hover:bg-[#7B88FF] group-hover:text-[#0B0F17] transition-all duration-300 shadow-inner">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white tracking-wide mb-1.5 group-hover:text-[#B4BCFF] transition-colors">
              MongoDB
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-[#7B88FF] uppercase font-bold">
              SPECIALIST
            </span>
          </div>

          <div className="group bg-[#111622] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#1B2234] flex items-center justify-center mb-5 text-[#B4BCFF] group-hover:bg-[#7B88FF] group-hover:text-[#0B0F17] transition-all duration-300 shadow-inner">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 16h20M4 20h16a2 2 0 0 0 2-2v-2H2v2a2 2 0 0 0 2 2z" />
                <rect x="6" y="12" width="4" height="4" />
                <rect x="10" y="12" width="4" height="4" />
                <rect x="14" y="12" width="4" height="4" />
                <rect x="10" y="8" width="4" height="4" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white tracking-wide mb-1.5 group-hover:text-[#B4BCFF] transition-colors">
              Docker
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-[#7B88FF] uppercase font-bold">
              Intermediate
            </span>
          </div>

          <div className="group bg-[#111622] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#1B2234] flex items-center justify-center mb-5 text-[#B4BCFF] group-hover:bg-[#7B88FF] group-hover:text-[#0B0F17] transition-all duration-300 shadow-inner">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white tracking-wide mb-1.5 group-hover:text-[#B4BCFF] transition-colors">
              AWS
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-[#7B88FF] uppercase font-bold">
              PRACTITIONER
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}