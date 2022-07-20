import React, {useState} from 'react';
import './index.css';
import Employee from './components/employee';
import data from './data';
import HourList from './components/HourList';

function App() {
  const [hours, setHours] = useState(data);
  return (
    <div className='bodyGrid'>
      <Employee/>
      <HourList hours={hours}/>
    </div>
  );
}

export default App;
