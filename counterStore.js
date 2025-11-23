import { create } from "zustand";

const useCounterStore = create((set, get) => ({
  initialCount: 0,

  increBy1Method: () =>
    set((state) => ({
      initialCount: state.initialCount + 1,
    })),
  decreBy1Method: () =>
    set((state) => ({
      initialCount: state.initialCount - 1,
    })),
}));
export default useCounterStore;
