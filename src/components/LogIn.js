import React, { useRef, useState } from 'react'

const LogIn = () => {
    const [person,setPerson] = useState(null);

    const nameRef = useRef("");
    const isAdminRef = useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();

        setPerson(
        {
            name: nameRef.current.value,
            isAdmin: isAdminRef.current.checked
        })
    }
  return (
    <>
        <h1>Dane osobowe</h1>
        {
            person&& <>
                <h2>{person.name}</h2>
                <h3>{person.isAdmin ? "Admin" : "Uzytkownik"}</h3>
            </>
        }
        <form onSubmit={handleSubmit}>
            <input
                text=""
                placeholder='Wprowadź imię'
                ref={nameRef}
            />
            <input
                type='checkbox'
                ref={isAdminRef}
            />Administrator
            <button type='submit'>Zatwierdź dane</button>
        </form>
    </>
  )
}

export default LogIn