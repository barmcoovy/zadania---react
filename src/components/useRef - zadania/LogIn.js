import React, { useRef, useState } from 'react'
import '../styles/LogIn.css'
const LogIn = () => {
    const [person,setPerson] = useState(null);

    const nameRef = useRef("");
    const isAdminRef = useRef(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(nameRef.current.value !== ""){

            setPerson(
                {
                    name: nameRef.current.value,
                    isAdmin: isAdminRef.current.checked
                })
        }
    }
  return (
    <div className='logIn-container'>
       
        <form onSubmit={handleSubmit}>
            <input
            type='text'
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
        
        {
            person&& <>
            <h1>Dane osobowe</h1>
                <h2>Nazwa: <span>{person.name}</span></h2>
                <h3>Rola: <span>{person.isAdmin ? "Admin" : "Użytkownik"}</span></h3>
            </>
        }
    </div>
  )
}

export default LogIn