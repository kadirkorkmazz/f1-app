import axios from 'axios';

export const getTeamDataFromApi = async (selectedTeam) => {
  return await axios
    .get(
      `/formula1/trial/v2/en/teams/${selectedTeam}/profile.json?api_key=${process.env.REACT_APP_API_KEY}`,
      { mode: 'cors' }
    )
    .then((response) => response.data);
};
