import React, {useState} from 'react';
import FilterButtons from './filterButtons';
import data from '../data';

// function to get all unique timeFrames from data file
// const allTimeFrames = ['daily',...new Set(data.map((item)=> item.timeframes))]
const allTimeFrames =['daily',...new Set(data.map((item) => item.timeframes))];

// employee component with employee information and filter buttons at the bottom
const Employee = () => {
    // default state that will only show unique timeframes
const [timeframes, setTimeFrames] = useState([allTimeFrames]);

// filter function to select different timeframes
const filterTimeFrames = (timeframe) => {
    const newTimeFrames = data.filter((item)=>item.timeframes === timeframe);
    setTimeFrames(newTimeFrames);

  }



    return (
        <div className='employeeContainer'>
            <div className='employeeInfoBox'>
                <img src='../../images/image-jeremy.png' alt='Jeremy Robson'></img>    
                <h6>Report for</h6>
                <h1>Jeremy Robson</h1>
            </div>
            <FilterButtons filterTimeFrames = {filterTimeFrames} timeframes = {timeframes}/>
        </div>
        
        
    );

}



export default Employee;