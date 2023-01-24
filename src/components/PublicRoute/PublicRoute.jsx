import { Outlet, Navigate, useLocation} from "react-router-dom"
import { useLoginContext } from "../../contexts/LoginModeContext"

export default function PublicRoute(){
    const {authorization} = useLoginContext()
    const location = useLocation()

    if(authorization.jwt){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    )
}

