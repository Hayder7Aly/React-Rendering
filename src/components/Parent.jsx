import React , {useState} from 'react'
import Child from './Child';



const ParentChild = () => {
    const [count , setCount] = useState(0)
    const [state , setState] = useState(false)

    console.log('Parent render');  
    return (
        <>
            <button onClick={()=> setCount(count + 1)}>increment - {count}</button>
            <button onClick={()=> setCount(count - 1)}>decrement - {count}</button>
            <button onClick={()=> setCount(0)}>Reset - {count}</button>
            <button onClick={()=> setState((preVal) => !preVal)}>State</button>
            <Child count={count}/>
        </>
    )
}

export default ParentChild
