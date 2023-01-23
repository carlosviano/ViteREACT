import {useLoginContext} from "../../contexts/LoginModeContext"

export default function LogOut(){

    const {logOutAcc} = useLoginContext()

    return (
        <button type="submit" onClick={logOutAcc}>Log out</button>
    )
}