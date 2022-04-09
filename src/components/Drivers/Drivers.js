import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import driverImages from '../../Helpers/imagesDatabase.json'
import './Drivers.css'
import DriverDetails from '../DriverDetails/DriverDetails'

function Drivers({drivers}) {

  const [selectedDriver, setSelecterDriver] = useState("sr:competitor:269471");
  const [selectedDriverTeam, setSelectedDriverTeam] = useState("sr:competitor:4510");
  const [popupToggle, setPopupToggle] = useState(false);

  const handlePopup = (e)=> {
    setSelecterDriver(e.target.id)
    setSelectedDriverTeam(e.target.dataset.team)
    setPopupToggle(true)
  }

  return (
    <div id='driverPage'>
        <h1>F1 Drivers 2022</h1>
    <div id='driverCards'>

{
  drivers.map(driver => 
    
    <Card key={driver.id}>
    <Card.Text id='driverNumber'> {driver.result.car_number}   </Card.Text>
  <Card.Img variant="top" src={driverImages.drivers.find(x => x.id === driver.id).imageUrl}/>
  <Card.Body  >
    <Card.Title  >{driver.name.toUpperCase()}</Card.Title>
    <Card.Text > {driver.team.name.toUpperCase()}  </Card.Text>
    <Card.Text> {driver.nationality.toUpperCase()}  </Card.Text>
    <Card.Text> {driver.result.points>0? "Points: " + driver.result.points : "No Points"} </Card.Text>
    <Card.Link data-team={driver.team.id} id={driver.id} onClick={handlePopup}>Details</Card.Link>
  </Card.Body>
</Card>
)}
</div>
<DriverDetails trigger={popupToggle} setPopupToggle={setPopupToggle} drivers={drivers} selectedDriver={selectedDriver} selectedDriverTeam={selectedDriverTeam}/>
 </div>

  )}

export default Drivers