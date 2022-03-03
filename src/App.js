import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './components/home/home.component';
import Stats from './components/stats/stats.component';
import Schedule from './components/schedule/schedule.component';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className='servicesContainer ms-auto'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/stats' element={<Stats />} />
          <Route exact path='/schedule' element={<Schedule />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
