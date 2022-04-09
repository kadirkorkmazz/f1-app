import axios from "axios"
import API_KEY from "./constants"

export const getDriverDataFromApi = async (selectedDriver) => {
    return await axios.get(`/formula1/trial/v2/en/competitors/${selectedDriver}/profile.json?api_key=${API_KEY}`, {mode:'cors'}).then(response => response.data)
}






