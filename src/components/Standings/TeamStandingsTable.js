import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './fixToReactSuperResponsiveTable.css';
import './standingsTable.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

function StandingsTable({ teams }) {
  return (
    <div className='standingsTable'>
      <h1>2022 Team Standings</h1>
      <Table>
        <Thead>
          <Tr>
            <Th>#</Th>
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
          {teams.map((team) => (
            <Tr key={team.id}>
              <Td>{team.result.position}</Td>
              <Td>{team.name.toUpperCase()}</Td>
              <Td>{team.nationality.toUpperCase()}</Td>
              <Td>{team.result.victories > 0 ? team.result.victories : 0}</Td>
              <Td>
                {team.result.polepositions > 0 ? team.result.polepositions : 0}
              </Td>
              <Td>{team.result.podiums > 0 ? team.result.podiums : 0}</Td>
              <Td>
                {team.result.fastest_laps > 0 ? team.result.fastest_laps : 0}
              </Td>
              <Td>{team.result.points > 0 ? team.result.points : 0}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default StandingsTable;
