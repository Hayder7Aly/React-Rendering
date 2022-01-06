import React, { useReducer } from 'react'

const initialValue = 0
const reducer = (state = initialValue , action) => {
    switch(action){
        case 'incr':
            return state + 1
        case 'decr':
            return state - 1
        case 'reset':
            return initialValue
        default: return state
    }
}

const UseReducer = () => {
    const [state , dispatch] = useReducer(reducer , initialValue)
    console.log('useReducer Rendered');
    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=> dispatch('incr')}>Increment</button>
            <button onClick={()=> dispatch('decr')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </>
    )
}

export default UseReducer


