import {Outlet,Navigate,useLocation} from "react-router-dom"
import { useLoginContext } from "../../contexts/LoginModeContext"

export default function PrivateRoute({allowedRoles}){
    const {authorization} = useLoginContext()

    return allowedRoles?.includes(authorization.role) ? (
        <Outlet/>
    ) : authorization?.jwt? (
        <Navigate to="/unauthorized"/>
    ) : (
        <Navigate to="/account"/>
    )
}