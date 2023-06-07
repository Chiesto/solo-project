import './App.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import SignIn from '../SignIn/SignIn';
import Trips from '../Trips/Trips';

function App() {

  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        <h1>WELCOME!</h1>
        <SignIn />
        <div>
          <h3>Schedule your trip</h3>
          {/* put link to schedule tab here */}
        </div>
        <h2>About Us!</h2>
        <p> - information about the company</p>
      </header>
      <Trips/>

    </div>
  );
}

export default App;
