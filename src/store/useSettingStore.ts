import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { defaultLocale, locales } from '@/static/locales';

interface SettingState {
  defaultLocale: string;
  locales: string[];
  setDefaultLocale: (newVal: string) => void;
}

const useSettingStore = create<SettingState>()(
  persist(
    (set, get) => ({
      defaultLocale: get()?.defaultLocale ? get()?.defaultLocale : defaultLocale,
      locales: locales,
      setDefaultLocale: (newVal) => set((state: any) => ({
        defaultLocale: state.defaultLocale = newVal,
      })),
    }),
    {
      name: 'setting',
      storage: createJSONStorage(() => sessionStorage), // default localstorage
    },
  ),
);

export default useSettingStore;
