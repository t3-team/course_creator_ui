import { create } from 'zustand';

interface User {
  email: string;
  fullName?: string;
  bio?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateProfile: (profile: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email: string, password: string) => {
    if (email && password) {
      set({ isAuthenticated: true, user: { email } });
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
  updateProfile: (profile) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...profile } : null,
    }));
  },
}));