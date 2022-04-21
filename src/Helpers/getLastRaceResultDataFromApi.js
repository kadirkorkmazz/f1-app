import axios from 'axios';

export const getSessionInfo = async (raceId) => {
  return await axios
    .get(
      `formula1/trial/v2/en/sport_events/${raceId}/summary.json?api_key=${process.env.REACT_APP_API_KEY}`,
      { mode: 'cors' }
    )
    .then((response) => response.data);
};
