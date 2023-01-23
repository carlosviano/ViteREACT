import Login from '../../components/Login/Login'
import LogOut from '../../components/LogOut/LogOut'
import { useLoginContext } from '../../contexts/LoginModeContext'


export default function Account(){

const {authorization} = useLoginContext();

return (<>{authorization === null ? <Login/> : <LogOut/>}</>)

}