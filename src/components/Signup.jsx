import React from 'react';
import { User, Mail, Lock, Shield, ArrowRight } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col items-center justify-center p-4 font-sans select-none">
      <div className="text-center max-w-sm mb-8">
        <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          Anas Portfolio
        </h1>
      </div>
      <div className="w-full max-w-md bg-[#111622] border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="anas" 
                className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                placeholder="anas@gmail.com" 
                className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Password
              </label>
              <div className="relative flex items-center">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-2">
            <input 
              type="checkbox" 
              id="terms" 
              className="w-4 h-4 rounded border-slate-700 bg-[#0B0F17] text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-slate-400 select-none cursor-pointer">
              I agree to the <a href="#" className="text-indigo-400 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="mt-6 text-xs text-slate-400">
        Already have an account?{' '}
        <a href="#" className="text-indigo-400 font-medium hover:underline">
          Login
        </a>
      </div>
      <div className="mt-4 text-xs text-slate-600">
        © 2026 AnasPortfolio. All rights reserved.
      </div>
    </div>
  );
}