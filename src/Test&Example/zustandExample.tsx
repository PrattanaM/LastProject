import { create } from 'zustand';

type Color = {
  id: string;
  name: string;
  // hexCode: string;
};

type Store = {
  colors: Color[];
  addColor: (color: Color) => void;
};

const useStore = create<Store>((set) => ({
  colors: [],
  addColor: (color) => {
    set((state) => ({ colors: [...state.colors, color]}), false);
    fetch('https://api-dev2.keyspace.tech/themes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(color),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
}));



export default useStore;