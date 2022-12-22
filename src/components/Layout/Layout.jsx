import Ofertas from "../Header/components/Ofertas"
import Header from "../Header/components/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"



export default function Layout(){
    return(
        <>
        <Ofertas text="Free shipping inside Europe"/>
        <Header />
        <Outlet/>
        <Footer/>
        </>
    )
}