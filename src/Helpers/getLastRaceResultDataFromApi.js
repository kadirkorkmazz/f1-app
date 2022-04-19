import axios from 'axios';
import API_KEY from './constants';

export const getSessionInfo = async (raceId) => {
  return await axios
    .get(
      `formula1/trial/v2/en/sport_events/${raceId}/summary.json?api_key=${API_KEY}`,
      { mode: 'cors' }
    )
    .then((response) => response.data);
};
