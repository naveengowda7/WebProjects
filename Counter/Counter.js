import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count,setCount] = useState(0);

    const increment =() => setCount(count + 1);
    const decrement =() => setCount(count - 1);

  return(
  <>
        <div className="container">
            <h1 className="number">{count}</h1>
            <section className='btn-container'>
                <button className="increment" onClick={decrement}>-</button>
                <button className="increment" onClick={increment}>+</button>
            </section>
        </div>

    </>
  );
}

export default Counter;
