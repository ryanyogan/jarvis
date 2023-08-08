import { create } from "zustand";

interface SidebarModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: (value: boolean) => void;
}

export const useSidebarSheet = create<SidebarModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpenChange: (value) => set({ isOpen: value }),
}));
