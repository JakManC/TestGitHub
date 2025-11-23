import { create } from "zustand";

const useCounterStore = create((set, get) => ({
  initialCount: 0,
}));
export default useCounterStore;
