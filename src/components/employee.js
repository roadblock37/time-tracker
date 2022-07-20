import React from 'react';

const Employee = () => {
    return (
        <div className='employeeContainer'>
            <div className='employeeInfoBox'>
                <img src='../../images/image-jeremy.png' alt='Jeremy Robson'></img>    
                <h6>Report for</h6>
                <h1>Jeremy Robson</h1>
            </div>
            <div className='filterButtonBox'>
                
                <button>Daily</button>
                <button>Weekly</button>
                <button className='monthlyBtn'>Monthly</button>
            </div>
            
        </div>
        
        
    );

}



export default Employee;