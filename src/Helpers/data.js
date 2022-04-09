import axios from 'axios';
import API_KEY from './constants';

export const getDataFromApi = async () => {
  return await axios
    .get(
      `/formula1/trial/v2/en/sport_events/sr:stage:937185/summary.json?api_key=${API_KEY}`,
      { mode: 'cors' }
    )
    .then((response) => response.data);
};
