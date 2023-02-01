import { fetchGear } from '../hooks/fetchData';
import { API } from '../lib/vhAPI';

export const resolvers = {
  Query: {
    swords: async () => {
      const data = fetchGear('sword');
      return data.then((res) => [res]);
    },
    axes: async () => {
      const data = fetchGear('axe');
      return data.then((res) => [res]);
    },
    shields: async () => {
      const data = fetchGear('shield');
      return data.then((res) => [res]);
    },
    chestplates: async () => {
      const data = fetchGear('chestplate');
      return data.then((res) => [res]);
    },
    helmets: async () => {
      const data = fetchGear('helmet');
      return data.then((res) => [res]);
    },
    boots: async () => {
      const data = fetchGear('boots');
      return data.then((res) => [res]);
    },
    leggings: async () => {
      const data = fetchGear('leggings');
      return data.then((res) => [res]);
    },
    idol_idona: async () => {
      const data = fetchGear('idol_malevolence');
      return data.then((res) => [res]);
    },
    idol_tenos: async () => {
      const data = fetchGear('idol_omniscient');
      return data.then((res) => [res]);
    },
    idol_wendaar: async () => {
      const data = fetchGear('idol_timekeeper');
      return data.then((res) => [res]);
    },
    idol_valera: async () => {
      const data = fetchGear('idol_benevolent');
      return data.then((res) => [res]);
    },
  },
};
