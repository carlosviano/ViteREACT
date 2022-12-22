import './button.css'
import { useState } from 'react'

export default function Button( ){
    const [isChanged,setIsChanged] = useState(false);
    function toggleIsChanged(){
        setIsChanged(!isChanged)
    }

    return(
        <>
        <p>El titulo esta {isChanged ? "Hola" : "Adios"}</p>
        <button onClick={toggleIsChanged}>Saludar</button>
        </>
    )
}