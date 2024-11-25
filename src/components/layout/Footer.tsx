import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/footer-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TQ</span>
              </div>
              <span className="text-lg font-semibold">Turiya.Quest</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered course creation platform for modern educators.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Turiya.Quest. All rights reserved.
            </p>
          </div>
          
          <div className="flex justify-end gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <button className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};