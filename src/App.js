import './App.css';
import Drivers from './components/Drivers/Drivers';
import Header from './components/Header/Header';
import Teams from './components/Teams/Teams';
import TeamStandingsTable from './components/Standings/TeamStandingsTable';
import DriverStandingTable from './components/Standings/DriverStandingsTable'
import standingsApiResult from "./Helpers/standingsApiResult.json"
import { useState, useEffect } from 'react';

function App() {

  const [drivers, setDrivers] = useState([])
  const [teams, setTeams] = useState([])

    useEffect(() => {
      /*api sorgu sınırı sebebiyle devre dışı bırakıldı.
        getDataFromApi()
        .then((result)=> result.stage.competitors)
        .then((result) => {
          console.log(result)
          setDrivers(result)
        })
        */
        setDrivers(standingsApiResult.stage.competitors)
        setTeams(standingsApiResult.stage.teams)
        console.log(standingsApiResult.stage.competitors)
        console.log(standingsApiResult.stage.teams)

        return () => {
        }
      }, [])


  
  return (
    <div className="App">
        <Header/>
        <Drivers drivers={drivers}/>
        <Teams teams={teams}/>
        <TeamStandingsTable teams={teams}/>
        <DriverStandingTable drivers={drivers}/>
        
    </div>
  );
}

export default App;
