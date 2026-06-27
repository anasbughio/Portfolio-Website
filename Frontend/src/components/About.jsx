import React from 'react';
import img  from '../assets/anas.jpg' 
export default function About() {
  return (
    <section id="about" className="bg-[#0B0F17] text-slate-100 py-12 px-6 md:px-12 font-sans select-none">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-800 bg-[#111622] shadow-2xl aspect-[4/5] group">
            <img 
              src={img}
              alt="Anas Bughio - MERN Stack Developer" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-left">
          
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            About the Developer
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            I bridge the gap between complex backend logic and intuitive digital design. Pursuing my Computer Science degree at UMT Lahore, I have built my foundation around the MERN stack—where every REST API endpoint is written with strict intention and every database schema is built to scale.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            My technical background combines hands-on UI engineering from my time at Integriti with the deep architecture required for full-scale AI platforms like Med VisionAI. This allows me to navigate the complete product lifecycle, from deep MongoDB aggregation optimization to the secure JWT micro-interactions that define a seamless user experience.
          </p>

          <div className="pt-4 grid grid-cols-2 gap-8 max-w-xs">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">5+</div>
              <div className="text-[10px] sm:text-xs font-mono tracking-wider text-emerald-400 uppercase mt-1">Full-Stack Repos</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">373</div>
              <div className="text-[10px] sm:text-xs font-mono tracking-wider text-emerald-400 uppercase mt-1">GitHub Commits</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}