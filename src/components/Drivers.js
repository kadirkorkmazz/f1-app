import React from 'react'
import Card from 'react-bootstrap/Card'
import { useState, useEffect} from 'react'
//import { getDataFromApi } from '../data'
import driverImages from '../imagesDatabase.json'
import standingsApiResult from "../standingsApiResult.json"
import './Drivers.css'

function Drivers() {

    const [drivers, setDrivers] = useState([])

    useEffect(() => {
      /*api sorgu sınırı sebebiyle devre dışı bırakıldı.
        getDataFromApi()
        .then((result)=> result.stage.competitors)
        .then((result) => {
          console.log(result)
          setDrivers(result)
        })
        */
        
        setDrivers(standingsApiResult.stage.competitors)
        console.log(standingsApiResult.stage.competitors)
        return () => {
        }
      }, [])


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
    <Card.Title  >{driver.name}</Card.Title>
    <Card.Text> {driver.team.name}  </Card.Text>
    <Card.Text> {driver.nationality}  </Card.Text>
    <Card.Text> {driver.result.points>0? "Points: " + driver.result.points : "No Points"} </Card.Text>


  </Card.Body>
</Card>
)}
</div>
 </div>

  )}

export default Drivers