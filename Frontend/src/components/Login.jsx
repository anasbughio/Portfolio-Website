import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // <-- 1. Plug in the brain!

export default function Login() {
  // 2. Give the form a memory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { login, loading, error } = useAuth(); // <-- Grabs live state & Axios trigger
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Fire the central context action
    const result = await login(email, password);
    
    if (result.success) {
      navigate('/'); // Handshake complete! Return to the main portfolio
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col items-center justify-center p-4 font-sans select-none">
      
      {/* Brand Header */}
      <div className="text-center max-w-sm mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#7B88FF] tracking-[0.12em]">
          ANAS PORTFOLIO
        </h1>
      </div>

      <div className="w-full max-w-md bg-[#111622] border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl">
        
        {/* 3. Trapped Backend Error Feedback */}
        {error && (
          <div className="mb-5 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2.5 text-red-400 text-xs text-left">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Live Form Handler */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-medium text-slate-300">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="anas@devportfolio.tech" 
                className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#7B88FF] focus:ring-1 focus:ring-[#7B88FF] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-medium text-slate-300">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#7B88FF] focus:ring-1 focus:ring-[#7B88FF] transition-all"
              />
            </div>
          </div>

          {/* Button isolated in its own block */}
          <div className="pt-2">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#7B88FF] hover:bg-[#6876ff] active:bg-[#5260ff] disabled:opacity-50 text-[#0B0F17] font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm shadow-lg cursor-pointer"
            >
              <span>{loading ? 'Verifying Key...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>

      <div className="mt-6 text-xs text-slate-400">
        Don't have an account?{' '}
        <Link to="/signup" className="text-[#7B88FF] font-medium hover:underline">
          Sign up
        </Link>
      </div>

      <div className="mt-4 text-xs text-slate-600">
        © {new Date().getFullYear()} AnasPortfolio. All rights reserved.
      </div>

    </div>
  );
}