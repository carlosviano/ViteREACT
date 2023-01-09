import Button from '../Button/button'
import './Login.css'
import {useState} from 'react';

export default function Login(){

    const usuario = {email: "carlitosviano@gmail.com", password: "123456"}

    const [user, setUser] = useState({
        email:"",
        password:""
    })
    console.log(user)
    function handleUser(event){
        const newUser = {
            ...user,
            [event.target.name]:event.target.value
        };
        setUser(newUser)
    }

    function checkUser(event){
        event.preventDefault()
        if(user.email === usuario.email && user.password === usuario.password){
            alert("Hola")
        } else { alert("Mal")}
    }

    return (    
        <div className='mainContainer'> 
        <div className='login'>
        <form onSubmit={checkUser} className='formLogin'>
            <h5>Login</h5>
            <div className='inputContainer'>
                <h6>Email</h6>
                <input type='text' name='email' value={user.email} onChange={handleUser} className='loginInput' placeholder=' '/>
            </div>
            <div className='inputContainer'>
                <h6>Password</h6>
                <input type='password' name='password' value={user.password} onChange={handleUser} className='loginInput' placeholder=' '/>
            </div>
            <Button value='Sign In'/>
        </form>
    </div>
            <div className='register'>
            <form className='formRegister'>
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
            </form>

        </div></div>

    )
}