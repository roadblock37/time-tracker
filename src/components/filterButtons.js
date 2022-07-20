import React from "react";

// component for filter buttons to select daily, weekly or monthly times
const FilterButtons = (timeFrames, filterTimeFrames)=> {
    return (
        <div>
            {timeFrames.map((timeFrame, index)=> {
                return (
                    <button type="button" key={index} onClick={()=> filterTimeFrames(timeFrame)}>{timeFrame}</button>

                );
            })}
            
        </div>
    );
};

export default FilterButtons;