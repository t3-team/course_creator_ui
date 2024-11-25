import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfileMenu } from '../UserProfileMenu';
import { useAuthStore } from '../../store/auth-store';

export const Header = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-lg">
      <div className="absolute inset-0 bg-[url('/header-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 py-6 relative">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">TQ</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Turiya.Quest
              </span>
              <p className="text-blue-100 text-sm">Course Creator Bot</p>
            </div>
          </div>
          
          {!isAuthenticated ? (
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <UserProfileMenu />
          )}
        </div>
      </div>
    </header>
  );
};