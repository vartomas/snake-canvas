import create from 'zustand';

interface SpeedStore {
  speed: number;
  setSpeed: (speed: number) => void;
}

const useSpeedStore = create<SpeedStore>((set) => ({
  speed: 20,
  setSpeed: (speed: number) => set(() => ({ speed })),
}));

export default useSpeedStore;
