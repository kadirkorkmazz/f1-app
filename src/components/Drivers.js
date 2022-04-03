import React from 'react'
import Card from 'react-bootstrap/Card'
import { useState, useEffect} from 'react'
import apiResult from '../apiResult.json'
import { getDataFromApi } from '../data'
import dImages from '../driverImages.json'

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
        
        setDrivers(apiResult.stage.competitors)
        console.log(apiResult.stage.competitors)
        return () => {
        }
      }, [])


  return (
    <div>Drivers

{
  drivers.map(driver => 
    
    <Card key={driver.id} style={{ width: '18rem' }}>
  <Card.Img style={{ width: '6rem' }} variant="top" src={dImages.images.find(x => x.id === driver.id).imageUrl}/>
  <Card.Body>
    <Card.Title  >{driver.name}</Card.Title>
    <Card.Text> Hi! I'm {driver.name}. I'm racing for {driver.team.name}. My last race position: {driver.result.position}  </Card.Text>
  </Card.Body>
</Card>
)}
</div>
  )}

export default Drivers