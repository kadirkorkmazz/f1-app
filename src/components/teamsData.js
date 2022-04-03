import axios from "axios"

const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/teams',
    headers: {
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
      'X-RapidAPI-Key': '795ee05994msh56c1941d517764bp1afa35jsn7a3633537876'
    }
  }

/*

  export const getTeamsData = async () => {
    return await axios.get(options)
    .then(response => response.data)
    .then(response => console.log(response))
}



export default getTeamsData
*/




  