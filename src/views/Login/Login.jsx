import Button from '../../components/Button/button'
import './Login.css'

export default function Login(){
    return (
        <div className='mainContainer'> 
        <div className='login'>
        <div className='formLogin'>
            <h5>Login</h5>
            <div className='inputContainer'>
                <h6>Email</h6>
                <input type='text' className='loginInput' placeholder=' '/>
            </div>
            <div className='inputContainer'>
                <h6>Password</h6>
                <input type='password' className='loginInput' placeholder=' '/>
            </div>
            <Button value='Sign In'/>
        </div>
    </div>
            <div className='register'>
            <div className='formRegister'>
                <h5>Create Account</h5>
                <div className='inputContainer'>
                    <h6>First Name</h6>
                    <input type='text' className='registerInput' placeholder=' '/>
                </div>
                <div className='inputContainer'>
                    <h6>Last Name</h6>
                    <input type='text' className='registerInput' placeholder=' '/>
                </div>
                <div className='inputContainer'>
                    <h6>Email</h6>
                    <input type='text' className='registerInput' placeholder=' '/>
                </div>
                <div className='inputContainer'>
                    <h6>Password</h6>
                    <input type='password' className='registerInput' placeholder=' '/>
                </div>
                <Button value='Create'/>
            </div>

        </div></div>

    )
}