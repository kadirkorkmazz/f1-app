import React from 'react';
import './DriverDetails.css';
import imagesDatabase from '../../Helpers/imagesDatabase.json';

function DriverDetails({
  trigger,
  setDriverDetailPopupToggle,
  selectedDriver,
  driverDetail,
  isDriverDetailLoading,
}) {
  const disableDriverPopup = (e) => {
    if (e.target.className.includes('close-area')) {
      setDriverDetailPopupToggle(false);
    }
  };

  return trigger ? (
    <div className='DetailsCard close-area' onClick={disableDriverPopup}>
      <div className='DetailsCardInner'>
        <div onClick={disableDriverPopup} className='close-btn close-area'>
          X
        </div>
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
        </div>
        <div className='DetailsCardRightSide'>
          <div className='driverInfo'>
            <table className='driverDetailsTable driver-table-left'>
              <tbody>
                <tr>
                  <th>Driver</th>
                  <td>
                    {!isDriverDetailLoading && driverDetail.competitor.name}
                  </td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.competitor.nationality}
                  </td>
                </tr>

                <tr>
                  <th>First Points</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.info &&
                      driverDetail.info.first_points}
                  </td>
                </tr>
                <tr>
                  <th>First Pole</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.info &&
                      driverDetail.info.first_pole}
                  </td>
                </tr>
                <tr>
                  <th>First Victory</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.info &&
                      driverDetail.info.first_victory}
                  </td>
                </tr>
              </tbody>
            </table>

            <table className='driverDetailsTable driver-table-right'>
              <tbody>
                <tr>
                  <th>Team</th>
                  <td>
                    {!isDriverDetailLoading && driverDetail.teams[0].name}
                  </td>
                </tr>
                <tr>
                  <th>Date Of Birth</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.info &&
                      driverDetail.info.dateofbirth}
                  </td>
                </tr>

                <tr>
                  <th>Debut</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.info &&
                      driverDetail.info.debut}
                  </td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.info &&
                      driverDetail.info.height}
                  </td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>
                    {!isDriverDetailLoading &&
                      driverDetail.info &&
                      driverDetail.info.weight}
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
