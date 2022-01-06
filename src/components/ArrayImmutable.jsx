import React, { useState } from 'react'

const initState = ['bruce', 'wayne']

const ArrayImmutable = () => {
    const [persons, setPersons] = useState(initState)
    const handleClick = () => {
        setPersons([...persons , 'dilbar'])
        // persons.push('Clark') // when we use this the values change but array or obj reference does not change
        // setPersons(persons)

        // console.log(persons);

    }
    console.log('re-rendering array')
    return (
        <>
            <button onClick={handleClick}>Click</button>
            {
                persons.map((person,idx) => <h2 key={idx}>{person}</h2>)
            }
        </>
    )
}

export default ArrayImmutable
