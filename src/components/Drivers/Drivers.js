import React from 'react'
import Card from 'react-bootstrap/Card'
import driverImages from '../../Helpers/imagesDatabase.json'
import './Drivers.css'

function Drivers({drivers}) {

  return (
    <div id='driverPage'>
        <h1>F1 Drivers 2022</h1>
    <div id='driverCards'>

{
  drivers.map(driver => 
    
    <Card key={driver.id} >
    <Card.Text id='driverNumber'> {driver.result.car_number}   </Card.Text>
  <Card.Img variant="top" src={driverImages.drivers.find(x => x.id === driver.id).imageUrl}/>
  <Card.Body>
    <Card.Title  >{driver.name.toUpperCase()}</Card.Title>
    <Card.Text> {driver.team.name.toUpperCase()}  </Card.Text>
    <Card.Text> {driver.nationality.toUpperCase()}  </Card.Text>
    <Card.Text> {driver.result.points>0? "Points: " + driver.result.points : "No Points"} </Card.Text>
  </Card.Body>
</Card>
)}
</div>
 </div>

  )}

export default Drivers