import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './LastRaceResult.css';
import alternativeSundayResult from '../../Helpers/alternativeDatas/LastRaceSundayResults.json';
import { getSessionInfo } from '../../Helpers/getLastRaceResultDataFromApi';

function LastRaceResult() {
  const lastRaceSundaySessionId = 'sr:stage:937823';
  const [sundayResult, setSundayResult] = useState(alternativeSundayResult);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSessionInfo(lastRaceSundaySessionId);
        setSundayResult(data);
        console.log('veri çekildi');
      } catch (error) {
        console.log('sorgu sınırı dolduğu için alternatif local data alındı');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='standingsTable'>
        <h1>Australian Grand Prix 2022</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>DRIVER</th>
              <th>TEAM</th>
              <th>NATIONALITY</th>
              <th>RACE RESULT</th>
              <th>QUALI POSITION</th>
              <th>POINTS</th>
              <th>TIME</th>
              <th>PIT STOPS</th>
            </tr>
          </thead>
          <tbody>
            {sundayResult.stage.competitors.map((driver) => (
              <tr key={driver.id}>
                <td>{driver.result.position}</td>
                <td>{driver.name.toUpperCase()}</td>
                <td>{driver.team.name.toUpperCase()}</td>
                <td>{driver.nationality.toUpperCase()}</td>
                <td>{driver.result.position}</td>
                <td>{driver.result.grid}</td>
                <td>{driver.result.points}</td>
                <td>{driver.result.time}</td>
                <td>{driver.result.pitstop_count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='raceInfos'>
          <ul>
            <li className='listTitle'>Additional Information</li>
            <li>Laps : 58</li>
            <li>Air Temperature : 27</li>
            <li>Track Temperature: 33</li>
            <li>Weather: Sunny</li>
            <li>Curves Left: 6</li>
            <li>Curves Right: 10</li>
            <li>Length : 5303 Km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LastRaceResult;
