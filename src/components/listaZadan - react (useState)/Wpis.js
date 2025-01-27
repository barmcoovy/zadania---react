import React from 'react';
const Wpis = ({ zadanie, usunZadanie, przesunWGore, przesunWDol, index, maxIndex })=> {
    return (
        <li className='wpis' style={zadanie.czyWyroznione ? {color: "red"} : {color: "black"}}>
            <div style={{width: "150px"}}>
                {zadanie.tekst}
            </div>
            <div style={{width: "70px", display: 'flex', gap: "20px"}}>
                <button onClick={usunZadanie}>✖</button>
                <button onClick={przesunWGore} disabled={index === 0}>↑</button>
                <button onClick={przesunWDol} disabled={index === maxIndex}>↓</button>
            </div>
        </li>
    );
}
export default Wpis;