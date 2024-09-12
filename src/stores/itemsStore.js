import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultItems } from "../lib/constants";

export const useItemStore = create(
  persist((set) => ({
    items: defaultItems,
    addItem: (newItemText) => {
      set((state) => {
        const newItem = {
          id: new Date().getTime(),
          text: newItemText,
          packed: false,
        };
        return { items: [...state.items, newItem] };
      });
    },
    removeItem: (id) => {
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      }));
    },
    toggleItem: (id) => {
      set((state) => {
        const newItems = state.items.map((item) => {
          if (item.id === id) {
            return { ...item, packed: !item.packed };
          }
          return item;
        });
        return { items: newItems };
      });
    },
    removeAllItems: () => {
      set(() => ({ items: [] }));
    },
    resetToInitial: () => {
      set(() => ({ items: defaultItems }));
    },
    markAllAsComplete: () => {
      set((state) => ({
        items: state.items.map((item) => ({ ...item, packed: true })),
      }));
    },
    markAllAsIncomplete: () => {
      set((state) => ({
        items: state.items.map((item) => ({ ...item, packed: false })),
      }));
    },
  }))
);
