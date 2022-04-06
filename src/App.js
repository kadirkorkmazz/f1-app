import './App.css';
import Drivers from './components/Drivers';
import Header from './components/Header';
import Teams from './components/Teams';
import StandingsTable from './components/StandingsTable';

function App() {
  
  return (
    <div className="App">
        <Header/>
        <Drivers/>
        <Teams/>
        <StandingsTable/>
        

    </div>
  );
}

export default App;
