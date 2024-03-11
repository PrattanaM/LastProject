import { create } from 'zustand';

interface ColorState {
  mainBackground: string;
  background: string;
  textOnBackground: string;
  setMainBackground: (color: string) => void;
  setBackground: (color: string) => void;
  setTextOnBackground: (color: string) => void;
}

export const useColorStore = create<ColorState>((set) => ({
  mainBackground: '#ffffff',
  background: '#f0f0f0',
  textOnBackground: '#000000',
  setMainBackground: (color: string) => set({ mainBackground: color }),
  setBackground: (color: string) => set({ background: color }),
  setTextOnBackground: (color: string) => set({ textOnBackground: color }),
}));
