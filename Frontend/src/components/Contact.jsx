import React, { useState } from 'react';
import API from '../api/axios'; // <--- Aap ka master axios instance

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' }); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      const response = await API.post('/contact', formData);
      setStatus({ type: 'success', msg: response.data.message || "Message sent successfully!" });
      
      // Form ko wapas khali kar do
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong. Please try again.";
      setStatus({ type: 'error', msg: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0B0F17] text-slate-100 py-24 px-6 md:px-12 font-sans select-none border-t border-slate-900/60">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Get in Touch.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Have a project in mind or just want to chat? I'm always interested in hearing about new technical challenges and collaborative opportunities.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 bg-[#111622] border border-slate-800/90 p-4 rounded-xl max-w-sm">
                <div className="w-10 h-10 rounded-lg bg-[#1B2234] flex items-center justify-center text-[#7B88FF] shrink-0 font-mono text-lg font-bold">
                  @
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                    Email
                  </span>
                  <a href="mailto:hello@devportfolio.tech" className="text-xs sm:text-sm font-bold text-slate-200 hover:text-[#7B88FF] transition-colors">
                    anasbughio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#111622] border border-slate-800/90 p-4 rounded-xl max-w-sm">
                <div className="w-10 h-10 rounded-lg bg-[#1B2234] flex items-center justify-center text-[#7B88FF] shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <line x1="6" y1="8" x2="6" y2="8" />
                    <line x1="10" y1="8" x2="18" y2="8" />
                    <line x1="6" y1="12" x2="6" y2="12" />
                    <line x1="10" y1="12" x2="18" y2="12" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                    Social Clusters
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2 mt-0.5">
                    <a href="https://github.com/anasbughio" target="_blank" rel="noreferrer" className="hover:text-[#7B88FF] transition-colors">GitHub</a>
                    <span className="text-slate-600 font-normal">/</span>
                    <a href="https://linkedin.com/in/anasbughio" target="_blank" rel="noreferrer" className="hover:text-[#7B88FF] transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#111622] border border-slate-800 rounded-2xl p-7 sm:p-10 shadow-2xl">
            
            {/* STATUS ALERT BANNER */}
            {status.msg && (
              <div className={`mb-6 p-4 rounded-xl text-xs font-bold border ${
                status.type === 'success' 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}>
                {status.msg}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#0B0F17] border border-slate-800/90 focus:border-[#7B88FF] rounded-lg px-4 py-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#7B88FF] transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#0B0F17] border border-slate-800/90 focus:border-[#7B88FF] rounded-lg px-4 py-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#7B88FF] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    required 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-[#0B0F17] border border-slate-800/90 focus:border-[#7B88FF] rounded-lg px-4 py-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#7B88FF] transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    rows={5} 
                    placeholder="Tell me about your project" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0B0F17] border border-slate-800/90 focus:border-[#7B88FF] rounded-lg px-4 py-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#7B88FF] transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-[#B4BCFF] hover:bg-[#7B88FF] disabled:opacity-50 text-[#0B0F17] font-bold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}