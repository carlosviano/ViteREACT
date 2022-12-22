import './button.css'
import { useState } from 'react'

export default function Button({setIsShown}){

    return(
        <>
        <button onClick={() => setIsShown("Hola")}>Borrar producto</button>
        </>
    )
    }


