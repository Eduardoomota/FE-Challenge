import { create } from "zustand";

interface StoreState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const initialValue = {
  sidebarOpen: false,
};

export const useStore = create<StoreState>((set) => ({
  ...initialValue,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
