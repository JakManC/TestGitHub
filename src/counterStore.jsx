import { create } from "zustand";

const useCounterStore = create((set) => ({
  counterArray: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ],
}));
export default useCounterStore;
