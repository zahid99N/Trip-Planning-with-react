import { useState } from 'react';
import './App.css';
import TripList from './component/TripList'; 

function App() {
  const [showTrip, setShowTrip] =useState(true)
  return (
    <div className="App">
      <button onClick={()=>setShowTrip(false)}>Hide Trips</button>
      <div>
        {showTrip &&<TripList />}
      </div>
    </div>
  );
}

export default App;
