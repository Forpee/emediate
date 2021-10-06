import create from "zustand";

export const useDarkMode = create((set) => ({
  darkMode: false,
  changeDarkMode: (mode) =>
    set((state) => {
      return {
        ...state,
        darkMode: mode,
      };
    }),
}));