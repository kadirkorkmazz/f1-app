import React from 'react';
import { Table } from 'react-bootstrap';
import './standingsTable.css';

function StandingsTable({ teams }) {
  return (
    <div className='standingsTable'>
      <h1>2022 Team Standings</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>TEAM</th>
            <th>NATIONALITY</th>
            <th>VICTORIES</th>
            <th>POLE POSITIONS</th>
            <th>PODIUMS</th>
            <th>FASTEST LAPS</th>
            <th>POINTS</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.result.position}</td>
              <td>{team.name.toUpperCase()}</td>
              <td>{team.nationality.toUpperCase()}</td>
              <td>{team.result.victories > 0 ? team.result.victories : 0}</td>
              <td>
                {team.result.polepositions > 0 ? team.result.polepositions : 0}
              </td>
              <td>{team.result.podiums > 0 ? team.result.podiums : 0}</td>
              <td>
                {team.result.fastest_laps > 0 ? team.result.fastest_laps : 0}
              </td>
              <td>{team.result.points > 0 ? team.result.points : 0}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default StandingsTable;
