import React from 'react';
import './Header.css';
import { Link, Outlet, NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Header() {
  return (
    <div>
      <header>
        <Link to='/'>
          <div className='f1logo'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg'
              alt='Kiwi standing on oval'
            />
          </div>
        </Link>
        <div className='navi'>
          <NavLink className='nav_link' to='drivers'>
            <button className='drivers'> Drivers</button>
          </NavLink>
          <NavLink className='nav_link' to='teams'>
            <button className='teams'> Teams</button>
          </NavLink>
          <NavLink className='nav_link' to='driverstandings'>
            <button className='driverStandings'> Driver Standings</button>
          </NavLink>
          <NavLink className='nav_link' to='teamstandings'>
            <button className='teamStandings'> Team Standings</button>
          </NavLink>
        </div>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;
