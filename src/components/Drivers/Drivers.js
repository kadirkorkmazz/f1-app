import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import driverImages from '../../Helpers/imagesDatabase.json';
import './Drivers.css';
import DriverDetails from '../DriverDetails/DriverDetails';
import { getDriverDataFromApi } from '../../Helpers/getDriverDataFromApi';

function Drivers({ drivers }) {
  const [selectedDriver, setSelecterDriver] = useState('sr:competitor:269471');
  const [selectedDriverTeam, setSelectedDriverTeam] =
    useState('sr:competitor:4510');
  const [driverDetailPopupToggle, setDriverDetailPopupToggle] = useState(false);
  const [driverDetail, setDriverDetail] = useState([]);
  const [isDriverDetailLoading, setIsDriverDetailLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDriverDataFromApi(selectedDriver);
      setDriverDetail(data);
      setIsDriverDetailLoading(false);
    };

    fetchData();

    /*
    getDriverDataFromApi(selectedDriver)
    .then((result)=> setDriverDetail(result), setIsDriverDetailLoading(false)
    )
  */
  }, [selectedDriver]);

  const handleCardClick = (e) => {
    setSelecterDriver(e.target.dataset.did);
    setSelectedDriverTeam(e.target.dataset.team);
    setDriverDetailPopupToggle(true);
  };

  return (
    <div id='driverPage'>
      <h1>F1 Drivers 2022</h1>
      <div id='driverCards'>
        {drivers.map((driver) => (
          <Card
            onClick={handleCardClick}
            key={driver.id}
            data-did={driver.id}
            data-team={driver.team.id}
          >
            <Card.Text
              id='driverNumber'
              data-did={driver.id}
              data-team={driver.team.id}
            >
              {' '}
              {driver.result.car_number}{' '}
            </Card.Text>
            <Card.Img
              variant='top'
              src={
                driverImages.drivers.find((x) => x.id === driver.id).imageUrl
              }
              data-did={driver.id}
              data-team={driver.team.id}
            />
            <Card.Body data-did={driver.id} data-team={driver.team.id}>
              <Card.Title data-did={driver.id} data-team={driver.team.id}>
                {driver.name.toUpperCase()}
              </Card.Title>
              <Card.Text data-did={driver.id} data-team={driver.team.id}>
                {' '}
                {driver.team.name.toUpperCase()}{' '}
              </Card.Text>
              <Card.Text data-did={driver.id} data-team={driver.team.id}>
                {' '}
                {driver.nationality.toUpperCase()}{' '}
              </Card.Text>
              <Card.Text data-did={driver.id} data-team={driver.team.id}>
                {' '}
                {driver.result.points > 0
                  ? 'Points: ' + driver.result.points
                  : 'No Points'}{' '}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <DriverDetails
        trigger={driverDetailPopupToggle}
        setDriverDetailPopupToggle={setDriverDetailPopupToggle}
        drivers={drivers}
        selectedDriver={selectedDriver}
        selectedDriverTeam={selectedDriverTeam}
        driverDetail={driverDetail}
        isDriverDetailLoading={isDriverDetailLoading}
      />
    </div>
  );
}

export default Drivers;
