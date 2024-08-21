import React, { useState } from 'react';
import watering from './watering.svg';
import './App.css';
const url = process.env.NODE_ENV === 'production' ? 'http://192.168.55.14:8003' : 'http://localhost:8003'

function App() {
  const [activeDuration, setActiveDuration] = useState<10 | 20 | 30 | 40>(10)
  const irrigate = async () => {
    fetch(`${url}/irrigation/irrigate`, { method: 'POST', body: JSON.stringify({ irrigationTime: activeDuration }),   headers: {
      "Content-Type": "application/json",
    }, })
  }

  const stopIrrigation = () => {
    fetch(`${url}/irrigation/stop`, { method: 'POST', body: JSON.stringify({ irrigationTime: activeDuration }),   headers: {
      "Content-Type": "application/json",
    }, })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', justifyContent: 'center' }}>
          <button
            style={activeDuration === 10 ? { background: 'gray' } : {}}
            onClick={() => setActiveDuration(10)} className='Duration-button'
          >
            10min
          </button>
          <button
            style={activeDuration === 20 ? { background: 'gray' } : {}}
            onClick={() => setActiveDuration(20)}
            className='Duration-button'>
              20min
          </button>
          <button
            style={activeDuration === 30 ? { background: 'gray' } : {}}
            onClick={() => setActiveDuration(30)} className='Duration-button'
          >
            30min
          </button>
          <button
            style={activeDuration === 40 ? { background: 'gray' } : {}}
            onClick={() => setActiveDuration(40)}
            className='Duration-button'
          >
            40min
          </button>
        </div>
        <img onClick={() => irrigate()} src={watering} className="App-logo" alt="logo" />

        <button
            style={{ marginTop: '20px', background: 'gray' }}
            onClick={() => stopIrrigation()}
            className='Duration-button'
          >
            Stop irrigation
          </button>
      </header>
    </div>
  );
}

export default App;
