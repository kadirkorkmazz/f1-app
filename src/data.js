
export const getDataFromApi = async () => {
    return await fetch("/formula1/trial/v2/en/sport_events/sr:stage:937185/summary.json?api_key=am4s6tqfm68rf9hkt9dd9pvw", {mode:'cors'})
    .then(response => response.json())
}