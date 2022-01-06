import React, { useState } from 'react'
import ChildA from './ChildA';
import ParentA from './ParentA';

const GrandParent = () => {
    const [newCount , setNewCount] = useState(0);

    return (
        <div>
            <button onClick={()=> setNewCount(newCount + 1)}>GrandParent Count - {newCount}</button>        
            <ParentA newCount={newCount}>
                <ChildA />
            </ParentA>
        </div>
    )
}

export default GrandParent
