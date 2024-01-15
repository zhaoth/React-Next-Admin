import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


// Custom types for theme


type AccessesState = {
  canAccessSystem: boolean
  setAccess: (newVal: string) => void;
}

export function containsAny(arr1: string[], arr2: string[]): boolean {
  return arr1.some((r) => arr2.includes(r));
}

const useAccessStore = create<AccessesState>()(
  persist(
    (set, get) => ({
      canAccessSystem: true,
      setAccess: (newVal:any) => set((state: any) => ({
        canAccessSystem: containsAny([newVal], ['canAccessSystem'])
      })),
    }),
    {
      name: 'access',
      storage: createJSONStorage(() => sessionStorage), // default localstorage
    },
  ),
);

export default useAccessStore;
