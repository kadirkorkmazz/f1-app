import React from 'react';
import './Home.css';
import redbullPhoto from '../../img/redbull_unsplash.jpg';
import driversPhoto from '../../img/f1-drivers.png';
import teamsPhoto from '../../img/f1-teams2.png';
import driverStandingsPhoto from '../../img/driver-standings.png';
import consStandingsPhoto from '../../img/cons-standings.png';
import latestResultPhoto from '../../img/latest-result.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='bannerImgFrame'>
        <img src={redbullPhoto} alt='Redbull F1 Car' />
      </div>

      <div className='navigateMenus1 nav-menu'>
        <Link to='/drivers'>
          <div className='driversPhotoFrame navi-img homeNav'>
            <img src={driversPhoto} alt='Drivers BG' />
          </div>
        </Link>
        <Link to='/teams'>
          <div className='teamsPhotoFrame navi-img homeNav'>
            <img src={teamsPhoto} alt='Teams BG' />
          </div>
        </Link>
      </div>
      <div className='navigateMenus2 nav-menu'>
        <Link to='/driverstandings'>
          <div className='driverStandingPhotoFrame navi-img homeNav'>
            <img src={driverStandingsPhoto} alt='Driver Standings BG' />
          </div>
        </Link>
        <Link to='/teamstandings'>
          <div className='teamStandingPhotoFrame navi-img homeNav'>
            <img src={consStandingsPhoto} alt='Team Standings BG' />
          </div>
        </Link>
        <Link to='/lastraceresult'>
          <div className='latestResult homeNav'>
            <img src={latestResultPhoto} alt='latestResult BG' />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
