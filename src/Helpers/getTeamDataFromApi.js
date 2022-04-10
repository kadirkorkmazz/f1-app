import axios from 'axios';
import API_KEY from './constants';

export const getTeamDataFromApi = async (selectedTeam) => {
  return await axios
    .get(
      `/formula1/trial/v2/en/teams/${selectedTeam}/profile.json?api_key=${API_KEY}`,
      { mode: 'cors' }
    )
    .then((response) => response.data);
};
