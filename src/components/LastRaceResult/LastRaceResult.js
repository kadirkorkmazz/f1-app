import React, { useEffect, useState } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../Standings/fixToReactSuperResponsiveTable.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
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

        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>DRIVER</Th>
              <Th>TEAM</Th>
              <Th>NATIONALITY</Th>
              <Th>RACE RESULT</Th>
              <Th>QUALI POSITION</Th>
              <Th>POINTS</Th>
              <Th>TIME</Th>
              <Th>PIT STOPS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sundayResult.stage.competitors.map((driver) => (
              <Tr key={driver.id}>
                <Td>{driver.result.position}</Td>
                <Td>{driver.name.toUpperCase()}</Td>
                <Td>{driver.team.name.toUpperCase()}</Td>
                <Td>{driver.nationality.toUpperCase()}</Td>
                <Td>{driver.result.position}</Td>
                <Td>{driver.result.grid}</Td>
                <Td>{driver.result.points}</Td>
                <Td>{driver.result.time}</Td>
                <Td>{driver.result.pitstop_count}</Td>
              </Tr>
            ))}
          </Tbody>
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
