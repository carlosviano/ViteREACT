import {productos} from "@/const/productos"
import { useState } from "react"
import Button from "../Button/Button"


export default function Lista(){

    const [isShown, setIsShown] = useState(false)

    return(
        <>
        {productos.map(product =>(
            <li>
                    <p>{`${product.titulo}`}</p>
            <Button setIsShown={setIsShown}/>
            </li>
        ))}

        </>
    )
}