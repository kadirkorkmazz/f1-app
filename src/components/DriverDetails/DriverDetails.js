import React from 'react'
import "./DriverDetails.css"

function DriverDetails() {
  return (
    <div className='DetailsCard'>

    <div className='driverImg'>
    <img src='https://media.api-sports.io/formula-1/drivers/34.png' alt='Charles Leclerc'></img>
    </div>
    <div className='DetailsCardRightSide'>
      <div className='driverCarImg'> 
      <img src='https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/4col/image.png' alt='Ferrari'></img>
</div>
      <div className='driverInfo'>
      
      <table className='driverDetailsTable' >
      <tbody>
      <tr>
        <th>Team</th>
        <td>Ferrari</td>
    </tr>
    <tr>
        <th>Country</th>
        <td>Monaco</td>
        
    </tr>
    <tr>
        <th>Podiums</th>
        <td>15</td>
    </tr>
    <tr>
        <th>Points</th>
        <td>605</td>
    </tr>
    <tr>
        <th>Date of Birth</th>
        <td>1994-09-01</td>
    </tr>
    <tr>
        <th>Place of Birth</th>
        <td>Monako</td>
    </tr>
    <tr>
        <th>Debut</th>
        <td>2015-03-15</td>
    </tr>
    <tr>
        <th>First Points</th>
        <td>2015-03-15</td>
    </tr>
    <tr>
        <th>Salary</th>
        <td>3500000</td>
    </tr>
      </tbody>
    
</table>
      
        

      </div>

    </div>


    </div>
  )
}

export default DriverDetails