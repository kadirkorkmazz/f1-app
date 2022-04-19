import './App.css';
import { useState, useEffect } from 'react';
import Router from './components/Router';
import { getDataFromApi } from './Helpers/data';
import alternativeData from './Helpers/alternativeDatas/Summary.json';

function App() {
  const [drivers, setDrivers] = useState(alternativeData.stage.competitors);
  const [teams, setTeams] = useState(alternativeData.stage.teams);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataFromApi();
        setDrivers(data.stage.competitors);
        setTeams(data.stage.teams);
        console.log('veri çekildi');
      } catch (error) {
        console.log("sorgu sınırı dolduğu için veri JSON'dan alındı");
      }
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
