import React from 'react'
import { Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import standingsApiResult from "../standingsApiResult.json"
import "./StandingsTable.css"

function StandingsTable() {
  
  const [teams, setTeams] = useState([])

  useEffect(() => {
    console.log(standingsApiResult.stage.teams)
    setTeams(standingsApiResult.stage.teams)
}, [])

  return (
    <div className='teamStandings'>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Team</th>
      <th>Nationality</th>
      <th>Victories</th>
      <th>Pole Positions</th>
      <th>Podiums</th>
      <th>Fastest Laps</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
  {
  teams.map(team => 
    <tr key={team.id}>
      <td>{team.result.position}</td>
      <td>{team.name}</td>
      <td>{team.nationality}</td>
      <td>{(team.result.victories)>0? team.result.victories : 0}</td>
      <td>{(team.result.polepositions)>0 ? team.result.polepositions : 0}</td>
      <td>{(team.result.podiums)>0 ? team.result.podiums : 0}</td>
      <td>{(team.result.fastest_laps)>0 ? team.result.fastest_laps : 0}</td>
      <td>{(team.result.points)>0 ? team.result.points : 0}</td>
    </tr>
)}
  </tbody>
</Table>
    </div>
  )
}

export default StandingsTable