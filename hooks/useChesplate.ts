import { API } from '../lib/vhAPI';

export async function useChesptlate() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await API.get(`chestplate`, config);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
