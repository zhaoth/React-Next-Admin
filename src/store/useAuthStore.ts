import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


// Custom types for theme

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  token: null | string;
  login: (email: string, password: string) => Promise<void>;
  register: (userInfo: FormData) => Promise<void>;
  logout: () => void;
  setToken: (newVal: string) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      setToken: (newVal) => set((state: any) => ({
        token: state.token = newVal,
      })),
      login: async () => {
        // Login user code
      },
      register: async () => {
        // Registering user code
      },
      logout: () => {
        // Logout user code
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage), // default localstorage
    },
  ),
);

export default useAuthStore;
