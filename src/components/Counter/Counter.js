import React from 'react';

const Counter = ({count, incrementCount, incrementBy}) => {
    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Increment by {incrementBy}</button>
        </div>
     );
}
 
export default Counter;