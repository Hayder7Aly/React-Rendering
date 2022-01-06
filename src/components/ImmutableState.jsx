import React, { useState } from 'react'


const initState = {
    name : "hayder",
    age : 16
}
const ImmutableState = () => {
    const [person , setPerson] = useState(initState)
    const changePerson = () => {
        // person.name = 'Jutt'
        // person.age  = 20
        // setPerson(person)
        const newPerson = {...person , name : 'jutt'}
        setPerson(newPerson)

    }

    console.log('immutable state');

    return (
        <>
            <button onClick={changePerson}>{`Name : ${person.name} and Age : ${person.age}`}</button>
        </>
    )
}

export default ImmutableState
