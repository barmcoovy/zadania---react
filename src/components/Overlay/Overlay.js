import React from 'react'
import './Overlay.css'
const Overlay = ({text,onClose}) => {
  return (
    <div className='overlay'>
        <div className='overlay-content'>
            <p>{text}</p>
            <button className='close-button' onClick={onClose}>Zamknij</button>
        </div>
    </div>
  )
}

export default Overlay