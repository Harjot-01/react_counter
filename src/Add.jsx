import React, { useState } from 'react'

export const Add = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input type="text" value={count} />
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

