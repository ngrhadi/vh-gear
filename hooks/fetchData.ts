import { API } from '../lib/vhAPI';

export async function fetchGear(v: string) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const request = await API.get(v, config);
    return request.data;
  } catch (err) {
    console.log(err);
  }
}
