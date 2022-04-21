import React, { useState } from 'react';
import './Header.css';
import { Link, Outlet, NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenuAfterPageSelect = () => {
    setIsActive(false);
  };
  return (
    <div>
      <header>
        <div className='logoAndMenuButtonArea'>
          <Link to='/'>
            <div className='f1logo'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg'
                alt='F1 Logo'
              />
            </div>
          </Link>
          <button onClick={toggleMenu} className='headerMenuSwitch'>
            <AiOutlineMenu />
          </button>
        </div>

        <div className={isActive ? 'navi show' : 'navi'}>
          <NavLink className='nav_link' to='drivers'>
            <button onClick={closeMenuAfterPageSelect} className='drivers'>
              Drivers
            </button>
          </NavLink>
          <NavLink className='nav_link' to='teams'>
            <button onClick={closeMenuAfterPageSelect} className='teams'>
              Teams
            </button>
          </NavLink>
          <NavLink className='nav_link' to='driverstandings'>
            <button
              onClick={closeMenuAfterPageSelect}
              className='driverStandings'
            >
              Driver Standings
            </button>
          </NavLink>
          <NavLink className='nav_link' to='teamstandings'>
            <button
              onClick={closeMenuAfterPageSelect}
              className='teamStandings'
            >
              Team Standings
            </button>
          </NavLink>
          <NavLink className='nav_link' to='lastraceresult'>
            <button
              onClick={closeMenuAfterPageSelect}
              className='lastRaceResult'
            >
              Last Race Result
            </button>
          </NavLink>
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;
