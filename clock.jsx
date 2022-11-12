import React, { useState, useEffect } from 'react'
// import ‘../../styles/clock.scss’;


export const Prueba456 = (props) => {
    
    const objComponente = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }
    
    const [comp, setComp] = useState(objComponente);

    const tick = () =>{
        setComp(  
            {                    
                nombre: 'Martín',
                apellidos: 'San José',
               fecha: new Date(),
               edad: comp.edad +1
            }
               );
     }

    useEffect(() => {
        const timerID = setInterval (() => {
             tick()
            }, 1000);            
        return () => {
            clearInterval(timerID);  
        }
    },);    
    

    

    return (
        <div>
            <h2>
            Hora Actual:
            {comp.fecha.toLocaleTimeString()}
            </h2>
            <h3>{comp.nombre} {comp.apellidos}</h3>
            <h1>Edad: {comp.edad}</h1>
        </div>
    );
};
