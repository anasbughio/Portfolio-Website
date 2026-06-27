import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0B0F17] text-slate-100 py-15 px-6 md:px-12 font-sans select-none border-t border-slate-900/60">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              A curated collection of projects where architectural integrity meets visual excellence.
            </p>
          </div>

          <a 
            href="https://github.com/anasbughio" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 text-xs font-mono tracking-wider text-[#7B88FF] hover:text-[#B4BCFF] uppercase transition-colors self-start md:self-auto py-2"
          >
            <span>View GitHub Archive</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <a 
            href="https://github.com/minhasfahad/medvision-ai"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-slate-800 bg-[#111622] hover:border-slate-700/80 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer block"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-800/60">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Med VisionAI Dashboard" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#0B0F17]/65 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#7B88FF] text-[#0B0F17] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl group-hover:bg-[#B4BCFF]">
                  <svg className="w-5 h-5 translate-x-[0.5px] -translate-y-[0.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">React</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">Node.js</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">Python</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">AWS EC2</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-[#7B88FF] transition-colors leading-snug">
                  Med VisionAI
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  A full-stack medical AI platform integrating computer vision models for medical image analysis, clinician dashboards, AI diagnostic insights, and role-based access control.
                </p>
              </div>
            </div>
          </a>

          <a 
            href="https://github.com/anasbughio/mental-health-platform"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-slate-800 bg-[#111622] hover:border-slate-700/80 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer block"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-800/60">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="Serenity AI Platform" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#0B0F17]/65 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#7B88FF] text-[#0B0F17] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl group-hover:bg-[#B4BCFF]">
                  <svg className="w-5 h-5 translate-x-[0.5px] -translate-y-[0.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">React</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">Node.js</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">Gemini AI</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">MongoDB</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-[#7B88FF] transition-colors leading-snug">
                  Serenity AI
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  A full-stack AI mental health companion providing 24/7 emotional support, mood tracking, smart journaling with sentiment analysis, guided exercises, and crisis resources.
                </p>
              </div>
            </div>
          </a>

          <a 
            href="https://github.com/anasbughio/Book-Exchange-Platform"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl overflow-hidden border border-slate-800 bg-[#111622] hover:border-slate-700/80 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer block"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-800/60">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" 
                alt="BooksExchange Ecosystem" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#0B0F17]/65 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#7B88FF] text-[#0B0F17] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl group-hover:bg-[#B4BCFF]">
                  <svg className="w-5 h-5 translate-x-[0.5px] -translate-y-[0.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">React</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">Supabase</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">AI Valuation</span>
                <span className="px-2.5 py-1 rounded-md bg-[#0B0F17]/90 border border-slate-800/90 text-[10px] font-mono tracking-wide text-[#B4BCFF]">Vercel</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-[#7B88FF] transition-colors leading-snug">
                  BooksExchange
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  A community-driven book swapping platform using a points-based exchange system. Features AI-based condition and demand valuation, wishlists, and physical QR book history tracking.
                </p>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}