import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './fixToReactSuperResponsiveTable.css';
import './standingsTable.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

function StandingsTable({ drivers }) {
  return (
    <div className='standingsTable'>
      <h1>2022 Driver Standings</h1>
      <div className='tableFrame'>
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>DRIVER</Th>
              <Th>TEAM</Th>
              <Th>NATIONALITY</Th>
              <Th>VICTORIES</Th>
              <Th>POLE POSITIONS</Th>
              <Th>PODIUMS</Th>
              <Th>FASTEST LAPS</Th>
              <Th>POINTS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {drivers.map((driver) => (
              <Tr key={driver.id}>
                <Td>{driver.result.position}</Td>
                <Td>{driver.name.toUpperCase()}</Td>
                <Td>{driver.team.name.toUpperCase()}</Td>
                <Td>{driver.nationality.toUpperCase()}</Td>
                <Td>
                  {driver.result.victories > 0 ? driver.result.victories : 0}
                </Td>
                <Td>
                  {driver.result.polepositions > 0
                    ? driver.result.polepositions
                    : 0}
                </Td>
                <Td>{driver.result.podiums > 0 ? driver.result.podiums : 0}</Td>
                <Td>
                  {driver.result.fastest_laps > 0
                    ? driver.result.fastest_laps
                    : 0}
                </Td>
                <Td>{driver.result.points > 0 ? driver.result.points : 0}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default StandingsTable;
