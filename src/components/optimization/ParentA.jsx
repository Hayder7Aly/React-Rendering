import React, { useState } from 'react'

const ParentA = ({children}) => {
    const [count , setCount] = useState(0)
    console.log('ParenetA Render');
    return (
        <>
            <button onClick={() => setCount(count + 1)}>increment</button>
            {children}
        </>
    )
}

export default ParentA
