import React from "react";

const HourList = ({hours}) => {
    return (
        <>
            {hours.map((hour) => {
                const {id, title, timeframes} = hour;
                return (
                    <article key={id}>
                        <p>{title}</p>
                        <p>{timeframes.weekly.current}</p>
                        <p>Last Week - {timeframes.weekly.previous}</p>
                        
                    </article>
                );
            })}
        </>
    );
}

export default HourList;