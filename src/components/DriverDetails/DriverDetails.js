import React from 'react'
import "./DriverDetails.css"
import imagesDatabase from '../../Helpers/imagesDatabase.json'

function DriverDetails({trigger,setPopupToggle,drivers,selectedDriver, selectedDriverTeam }) {

  const disablePopup = () => {
    setPopupToggle(false);
  }

  return (trigger)? (

    <div className='DetailsCard'>

    <div className='DetailsCardInner'>

    <button onClick={disablePopup} className='close-btn'>X</button>

      <div className='DetailsCardLeftSide'>

      <div className='driverImg'>
    <img src={imagesDatabase.drivers.find(driver => driver.id === selectedDriver).imageUrl} alt='DriverPhoto'></img>
    </div>

    <div className='driverCarImg'> 
      <img src={imagesDatabase.teams.find(team => team.id === selectedDriverTeam).imageUrl} alt='CarPhoto'></img>
</div>
</div>

    <div className='DetailsCardRightSide'>

      <div className='driverInfo'>
      
      <table className='driverDetailsTable' >
      <tbody>
      <tr >
        <th>Team</th>
        <td>{drivers.find(element => element.id === selectedDriver).team.name}</td>
    </tr>
    <tr>
        <th>Country</th>
        <td>{drivers.find(element => element.id === selectedDriver).nationality}</td>
        
    </tr>
    <tr>
        <th>Podiums</th>
        <td>{drivers.find(element => element.id === selectedDriver).result.podiums}</td>
    </tr>
    <tr>
        <th>Points</th>
        <td>{drivers.find(element => element.id === selectedDriver).result.points}</td>
    </tr>
    <tr>
        <th>Date of Birth</th>
        <td>1994-09-01</td>
    </tr>
    <tr>
        <th >Place of Birth</th>
        <td>Monako</td>
    </tr>
    <tr>
        <th >Debut</th>
        <td>2015-03-15</td>
    </tr>
    <tr>
        <th >First Points</th>
        <td>2015-03-15</td>
    </tr>
    <tr>
        <th >Salary</th>
        <td>3500000</td>
    </tr>
      </tbody>
    
</table>

      </div>

    </div>

    </div>

    </div>
  ): ""
  
}

export default DriverDetails