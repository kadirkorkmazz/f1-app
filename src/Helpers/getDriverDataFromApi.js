import axios from 'axios';

export const getDriverDataFromApi = async (selectedDriver) => {
  return await axios
    .get(
      `/formula1/trial/v2/en/competitors/${selectedDriver}/profile.json?api_key=${process.env.REACT_APP_API_KEY}`,
      { mode: 'cors' }
    )
    .then((response) => response.data);
};
