import React from 'react';
import { ArrowDown, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B0F17] text-slate-100 flex items-center justify-center p-6 md:p-12 font-sans select-none overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111622] border border-slate-800 text-xs font-mono tracking-wide text-emerald-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for Internships & Projects
          </div>

          {/* Updated Title specifically tailored for a MERN Stack Developer */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Engineering full-stack MERN apps with <span className="text-[#7B88FF]">precision.</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Full-stack MERN developer and CS student specializing in scalable architectures, high-performance web apps, and modern REST APIs. Crafting user-centric code from Lahore, Pakistan.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link 
              to="#" 
              className=" hover:bg-[#6876ff] active:bg-[#5260ff] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-[#7B88FF]/10 flex items-center gap-2 border border-[#7B88FF]"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link 
              to="#" 
              className="bg-[#111622] hover:bg-[#161d2e] text-slate-300 font-semibold px-6 py-3.5 rounded-xl text-sm border border-slate-800 transition-all hover:text-white"
            >
              About Me
            </Link>
          </div>

          {/* Stats Section: Gemini API removed */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <div className="text-lg font-bold text-white">Next.js</div>
              <div className="text-xs text-slate-500">CMS & UI Integration</div>
            </div>
            <div>
              <div className="text-lg font-bold text-white">AWS EC2</div>
              <div className="text-xs text-slate-500">Production CI/CD</div>
            </div>
            <div>
              <div className="text-lg font-bold text-white">AI / ML</div>
              <div className="text-xs text-slate-500">Python AI Models</div>
            </div>
          </div>

        </div>

        <div className="lg:col-span-5 w-full">
          <div className="bg-[#111622] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
            
            <div className="bg-[#161D2E] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-slate-500 text-xs">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#7B88FF]" />
                <span className="text-slate-300 font-medium">developer.js</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              </div>
            </div>

            <div className="p-6 space-y-3 text-slate-300 overflow-x-auto">
              <div>
                <span className="text-purple-400 font-semibold">const</span>{' '}
                <span className="text-blue-400">developer</span>{' '}
                <span className="text-purple-400">=</span> <span className="text-yellow-300">&#123;</span>
              </div>

              <div className="pl-6 space-y-2.5">
                <div>
                  <span className="text-slate-500">name:</span>{' '}
                  <span className="text-emerald-300">'Anas Bughio'</span><span className="text-slate-500">,</span>
                </div>
                
                <div>
                  <span className="text-slate-500">role:</span>{' '}
                  <span className="text-emerald-300">'Full-stack MERN Architect'</span><span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-slate-500">location:</span>{' '}
                  <span className="text-emerald-300">'Lahore, Pakistan'</span><span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-slate-500">skills:</span>{' '}
                  <span className="text-purple-400">&#91;</span>
                  <span className="text-amber-300">'React'</span><span className="text-slate-500">, </span>
                  <span className="text-amber-300">'Next.js'</span><span className="text-slate-500">, </span>
                  <span className="text-amber-300">'Node.js'</span><span className="text-slate-500">, </span>
                  <span className="text-amber-300">'MongoDB'</span>
                  <span className="text-purple-400">&#93;</span><span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-slate-500">openToWork:</span>{' '}
                  <span className="text-amber-400 font-bold">false</span>
                </div>
              </div>

              <div>
                <span className="text-yellow-300">&#125;</span><span className="text-slate-500">;</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}