import './App.css';
import { useState, useEffect } from 'react';
import Router from './components/Router';
import { getDataFromApi } from './Helpers/data';

function App() {
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataFromApi();
      setDrivers(data.stage.competitors);
      setTeams(data.stage.teams);
      console.log(data.stage);
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Router driversData={drivers} teamsData={teams} />
    </div>
  );
}

export default App;
