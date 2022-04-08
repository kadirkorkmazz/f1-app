import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Drivers from './Drivers/Drivers'
import Teams from './Teams/Teams'
import DriverStandings from './Standings/DriverStandingsTable'
import Header from './Header/Header'
import TeamStandings from './Standings/TeamStandingsTable'
import DriverDetails from './DriverDetails/DriverDetails'

function Router({teamsData,driversData}) {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Header /> }>
            <Route path='drivers' exact element={<Drivers drivers={driversData} />}/>
            <Route path='teams' exact element={<Teams teams={teamsData} />}/>
            <Route path='driverstandings' exact element={<DriverStandings drivers={driversData} />}/>
            <Route path='teamstandings' exact element={<TeamStandings teams={teamsData} />}/>
            <Route path='details' exact element={<DriverDetails drivers={driversData} />}/>

            </Route>
        </Routes>
    </BrowserRouter>



    )
}

export default Router