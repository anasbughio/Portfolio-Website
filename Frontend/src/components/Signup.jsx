import React, { useState } from 'react';
import { User, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { signup, loading, error } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signup(formData.name, formData.email, formData.password);
    if (result.success) {
      navigate('/');
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
        
        {/* Trapped Backend Error Banner */}
        {error && (
          <div className="mb-5 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2.5 text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Fixed: onSubmit (one 'o') */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-medium text-slate-300">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                required
                placeholder="Anas Bughio"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#7B88FF] focus:ring-1 focus:ring-[#7B88FF] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-medium text-slate-300">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                required
                placeholder="anas@devportfolio.tech" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#7B88FF] focus:ring-1 focus:ring-[#7B88FF] transition-all"
              />
            </div>
          </div>

          {/* Fixed: Removed the 2-column Grid restriction */}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-medium text-slate-300">
              Password
            </label>
            <div className="relative flex items-center">
              <input 
                type="password" 
                required
                minLength={6}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="••••••••" 
                className="w-full bg-[#0B0F17] border border-slate-800 rounded-lg py-2.5 px-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#7B88FF] focus:ring-1 focus:ring-[#7B88FF] transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-2">
            <input 
              type="checkbox" 
              required
              id="terms" 
              className="w-4 h-4 rounded border-slate-700 bg-[#0B0F17] text-[#7B88FF] focus:ring-[#7B88FF] cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-slate-400 select-none cursor-pointer">
              I agree to the <a href="#terms" className="text-[#7B88FF] hover:underline">Terms of Service</a> and <a href="#privacy" className="text-[#7B88FF] hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-4 bg-[#7B88FF] hover:bg-[#6876ff] active:bg-[#5260ff] disabled:opacity-50 text-[#0B0F17] font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm shadow-lg cursor-pointer"
          >
            <span>{loading ? 'Booting Account...' : 'Create Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>
      </div>

      {/* Fixed: Link points to /login */}
      <div className="mt-6 text-xs text-slate-400">
        Already have an account?{' '}
        <Link to="/login" className="text-[#7B88FF] font-medium hover:underline">
          Login
        </Link>
      </div>
      
      <div className="mt-4 text-xs text-slate-600">
        © {new Date().getFullYear()} AnasPortfolio. All rights reserved.
      </div>

    </div>
  );
}