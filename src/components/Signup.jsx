import React from 'react';
import { User, Mail, Lock, Shield, ArrowRight } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#070a12] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="text-center max-w-sm mb-8 z-10">
        <h2 className="text-sm font-bold tracking-wider text-indigo-200 mb-2">
          DevPortfolio
        </h2>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Create your space
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Architect your professional digital identity with precision.
        </p>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-md bg-[#101626] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl z-10">
        
        <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-[#151c30] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/70 transition-colors"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full bg-[#151c30] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/70 transition-colors"
              />
            </div>
          </div>

          {/* Password & Confirm Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 w-4 h-4 text-slate-500" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-[#151c30] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/70 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                Confirm
              </label>
              <div className="relative flex items-center">
                <Shield className="absolute left-3.5 w-4 h-4 text-slate-500" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-[#151c30] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/70 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input 
              type="checkbox" 
              id="terms" 
              className="mt-0.5 w-3.5 h-3.5 rounded border-slate-700 bg-[#151c30] text-indigo-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-slate-400 select-none leading-relaxed">
              I agree to the <a href="#" className="text-teal-400 hover:underline">Terms of Service</a> and <a href="#" className="text-teal-400 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* CTA Submit Button */}
          <button 
            type="submit" 
            className="w-full mt-2 bg-[#d8dcff] hover:bg-[#c7ccff] text-[#0a0f1d] font-bold py-3 px-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-lg shadow-indigo-500/10 active:scale-[0.99]"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

        </form>

        {/* Section Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800/80"></div>
          </div>
          <div className="relative flex justify-center text-[9px] font-bold uppercase tracking-widest">
            <span className="bg-[#101626] px-3 text-slate-500">Social Connect</span>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 bg-[#141b2e] hover:bg-[#1a233a] border border-slate-800/80 text-slate-300 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </button>

          <button 
            type="button" 
            className="flex items-center justify-center gap-2 bg-[#141b2e] hover:bg-[#1a233a] border border-slate-800/80 text-slate-300 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Google</span>
          </button>
        </div>

      </div>

      {/* Bottom Subtext */}
      <div className="mt-6 text-xs text-slate-400 z-10">
        Already have an account?{' '}
        <a href="#" className="text-teal-400 font-semibold hover:underline">
          Login
        </a>
      </div>

      {/* Footer Links */}
      <div className="mt-12 flex gap-6 text-[10px] tracking-widest text-slate-600 uppercase font-bold z-10">
        <a href="#" className="hover:text-slate-400 transition-colors">Twitter</a>
        <a href="#" className="hover:text-slate-400 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-slate-400 transition-colors">GitHub</a>
      </div>

      {/* Tiny Copyright */}
      <div className="mt-4 text-[9px] text-slate-700/60 tracking-tighter uppercase z-10">
        © 2026 Devportfolio. Architected for the modern builder.
      </div>
    </div>
  );
}