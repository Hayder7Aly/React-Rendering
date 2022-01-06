import React from "react"
const Child = ({count}) => {
    console.log('Child Render');
    return (
        <>
            <br /><h1>Child {count}</h1>
        </>
    )
}

export default React.memo(Child);