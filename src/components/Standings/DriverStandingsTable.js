import React from 'react'
import { Table } from 'react-bootstrap'
import "./standingsTable.css"

function StandingsTable({drivers}) {
  
  return (
    <div className='standingsTable'>

    <h1>2022 Driver Standings</h1>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>DRIVER</th>
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
  {
  drivers.map(driver => 
    <tr key={driver.id}>
      <td>{driver.result.position}</td>
      <td>{driver.name.toUpperCase()}</td>
      <td>{driver.team.name.toUpperCase()}</td>
      <td>{driver.nationality.toUpperCase()}</td>
      <td>{(driver.result.victories)>0? driver.result.victories : 0}</td>
      <td>{(driver.result.polepositions)>0 ? driver.result.polepositions : 0}</td>
      <td>{(driver.result.podiums)>0 ? driver.result.podiums : 0}</td>
      <td>{(driver.result.fastest_laps)>0 ? driver.result.fastest_laps : 0}</td>
      <td>{(driver.result.points)>0 ? driver.result.points : 0}</td>
    </tr>
)}
  </tbody>
</Table>
    </div>
  )
}

export default StandingsTable