import React from 'react';
import './DriverDetails.css';
import imagesDatabase from '../../Helpers/imagesDatabase.json';

function DriverDetails({
  trigger,
  setPopupToggle,
  selectedDriver,
  selectedDriverTeam,
  driverDetail,
  isLoading,
}) {
  const disablePopup = (e) => {
    if (e.target.className.includes('close-area')) {
      setPopupToggle(false);
    }
  };

  return trigger ? (
    <div className='DetailsCard close-area' onClick={disablePopup}>
      <div className='DetailsCardInner'>
        <button onClick={disablePopup} className='close-btn close-area'>
          X
        </button>
        <div className='DetailsCardLeftSide'>
          <div className='driverImg'>
            <img
              src={
                imagesDatabase.drivers.find(
                  (driver) => driver.id === selectedDriver
                ).imageUrl
              }
              alt='DriverPhoto'
            ></img>
          </div>

          <div className='driverCarImg'>
            <img
              src={
                imagesDatabase.teams.find(
                  (team) => team.id === selectedDriverTeam
                ).imageUrl
              }
              alt='CarPhoto'
            ></img>
          </div>
        </div>
        <div className='DetailsCardRightSide'>
          <div className='driverInfo'>
            <table className='driverDetailsTable'>
              <tbody>
                <tr>
                  <th>Team</th>
                  <td>{!isLoading && driverDetail.teams[0].name}</td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>{!isLoading && driverDetail.competitor.nationality}</td>
                </tr>
                <tr>
                  <th>Date Of Birth</th>
                  <td>
                    {!isLoading &&
                      driverDetail.info &&
                      driverDetail.info.dateofbirth}
                  </td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>
                    {!isLoading &&
                      driverDetail.info &&
                      driverDetail.info.height}
                  </td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>
                    {!isLoading &&
                      driverDetail.info &&
                      driverDetail.info.weight}
                  </td>
                </tr>
                <tr>
                  <th>Debut</th>
                  <td>
                    {!isLoading && driverDetail.info && driverDetail.info.debut}
                  </td>
                </tr>
                <tr>
                  <th>First Points</th>
                  <td>
                    {!isLoading &&
                      driverDetail.info &&
                      driverDetail.info.first_points}
                  </td>
                </tr>
                <tr>
                  <th>First Pole</th>
                  <td>
                    {!isLoading &&
                      driverDetail.info &&
                      driverDetail.info.first_pole}
                  </td>
                </tr>
                <tr>
                  <th>First Victory</th>
                  <td>
                    {!isLoading &&
                      driverDetail.info &&
                      driverDetail.info.first_victory}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default DriverDetails;
