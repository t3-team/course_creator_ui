import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useAuthStore } from '../store/auth-store';
import { Mail, Lock, User } from 'lucide-react';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password); // In a real app, this would be a signup API call
    navigate('/create');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="absolute inset-0 bg-[url('/auth-pattern.svg')] opacity-10"></div>
      
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl relative">
        <div className="mb-12 text-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-4">
            <span className="text-white font-bold text-4xl">TQ</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Turiya.Quest</h1>
          <p className="text-blue-100">Join our community of educators</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-100 w-5 h-5" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Full name"
                required
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-100 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-100 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-colors"
          >
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-blue-100">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-white hover:underline font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};