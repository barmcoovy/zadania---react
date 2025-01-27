import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
  return (
    <>
    <input
        ref={inputRef}
        type='text'
        placeholder='Kliknij żeby wpisać'
    />
    <button onClick={()=>inputRef.current.focus()}>
        Skup na input
    </button>
    </>
  )
}

export default FocusInput