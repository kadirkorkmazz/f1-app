import './App.css';
import standingsApiResult from './Helpers/standingsApiResult.json';
import { useState, useEffect } from 'react';
import Router from './components/Router';

function App() {
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    /*api sorgu sınırı sebebiyle devre dışı bırakıldı.
        getDataFromApi()
        .then((result)=> result.stage.competitors)
        .then((result) => {
          console.log(result)
          setDrivers(result)
        })
        */

    setDrivers(standingsApiResult.stage.competitors);
    setTeams(standingsApiResult.stage.teams);
    console.log(standingsApiResult.stage.competitors);
    console.log(standingsApiResult.stage.teams);
  }, []);

  return (
    <div className='App'>
      <Router driversData={drivers} teamsData={teams} />
    </div>
  );
}

export default App;
