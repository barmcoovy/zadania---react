import React, { useRef, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const previousCurrentRef = useRef(0);

    const handleCount = ()=>{
        previousCurrentRef.current +=1  ;
        console.log(previousCurrentRef.current)
        // setCount(count+1)
    }
  return (
    <div>
        <p>Aktualna wartość: {count}</p>
        <p>Poprzednia wartość {previousCurrentRef.current}</p>
        <button onClick={handleCount}>Zwieksz licznik</button>
    </div>
  )
}

export default Counter