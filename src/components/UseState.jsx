import React, { useState } from 'react'
  
const UseState = () => {
    const [count , setCount] = useState(0)
    const [newCount , setNewCount] = useStat(10)
    console.log('use state render');
    return (
        <>
            <button onClick={()=> setCount(count + 1)}>Click Count - {count}</button>
            <button onClick={()=> setCount(0)}>Count to 0</button>
            <button onClick={()=> setCount(count + 5)}>Count to 5</button>
        </>
    )
}

export default UseState
