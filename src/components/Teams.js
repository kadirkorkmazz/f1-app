import React from 'react'
import { useState, useEffect } from 'react'
import standingsApiResult from "../standingsApiResult.json"
import Card from 'react-bootstrap/Card'
import teamImages from '../imagesDatabase.json'
import "./Teams.css"



function Teams() {
    const [teams, setTeams] = useState([])


    useEffect(() => {
        console.log(standingsApiResult.stage.teams)
        setTeams(standingsApiResult.stage.teams)
    
    }, [])

  return (

    <div id='teamsPage'>
        <h1>F1 Teams 2022</h1>
    <div id='teamCards'>

{
  teams.map(team => 
    
    <Card key={team.id} >
    <Card.Img className='teamImage' variant="top" src={teamImages.teams.find(x => x.id === team.id).imageUrl}/>
  <Card.Body>
    <Card.Title  >{team.name}</Card.Title>
    <Card.Text> {team.nationality}  </Card.Text>
    <Card.Text> {team.result.points>0? "Team Points: " + team.result.points : "No Points"}  </Card.Text>

  </Card.Body>
</Card>
)}
</div>
 </div>

  
  )
}

export default Teams