import React, { useState } from 'react'
import ChildB from './ChildB'

const ParentB = () => {
    const [count , setCount] = useState(0)
    const [name , setName] = useState('Hayder')
    console.log('ParentB render')
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => setName('jutt')}>Change name</button>
            <ChildB name={name}/>
        </div> 
    )
}

export default ParentB
