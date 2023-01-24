import Button from '../Button/button'
import './Login.css'
import {useState} from 'react';
import { useLoginContext } from '../../contexts/LoginModeContext';


export default function Login(){

    const {logInAcc} = useLoginContext()

    const  [newUser, setNewUser] = useState({
        email:"",
        password:"",
        name:"",
        surname:""
       })

    function handleRegisterInput(e){
        const newRegister = {
            ...newUser,
            [e.target.name]:e.target.value
        }
        setNewUser(newRegister)
       }

    function registerAcc(e){
        e.preventDefault()
        fetch("http://localhost:3000/user",{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            }
        ,
        body: JSON.stringify(newUser)
         }).then((response) => {
            console.log(response.status);
            if(response.status === 400){
                alert('Error al recibir el body')
            } else if(response.status === 200){
                alert(`Usuario ${newUser.name} registrado correctamente`)
                setNewUser({
                    email:"",
                    password:"",
                    name:"",
                    surname:""
                   })
            } else if(response.status === 409){
                alert('Usuario ya registrado')
            }
         })
    }

    const [newUserLogin, setNewUserLogin] = useState({
        email:"",
        password:""
    })

    function handleLogInInput(e){
        const newLogIn = {
            ...newUserLogin,
            [e.target.name]: e.target.value
        }
        setNewUserLogin(newLogIn)
    }



    return (    
        <div className='mainContainer'> 
        <div className='login'>
        <form className='formLogin' onSubmit={(e)=> logInAcc(e,newUserLogin)}>
            <h5>Login</h5>
            <div className='inputContainer'>
                <h6>Email</h6>
                <input type='text' name='email' value={newUserLogin.email} onChange={handleLogInInput} className='loginInput'/>
            </div>
            <div className='inputContainer'>
                <h6>Password</h6>
                <input type='password' name='password' value={newUserLogin.password} onChange={handleLogInInput} className='loginInput'/>
            </div>
            <Button value='Sign In'/>
        </form>
    </div>
            <div className='register'>
            <form className='formRegister' onSubmit={registerAcc}>
                <h5>Create Account</h5>
                <div className='inputContainer'>
                    <h6>First Name</h6>
                    <input type='text' className='registerInput' name='name' value={newUser.name} onChange={handleRegisterInput}/>
                </div>
                <div className='inputContainer'>
                    <h6>Last Name</h6>
                    <input type='text' className='registerInput' name='surname' value={newUser.surname} onChange={handleRegisterInput}/>
                </div>
                <div className='inputContainer'>
                    <h6>Email</h6>
                    <input type='text' className='registerInput' name='email' value={newUser.email} onChange={handleRegisterInput}/>
                </div>
                <div className='inputContainer'>
                    <h6>Password</h6>
                    <input type='password' className='registerInput' name='password' value={newUser.password} onChange={handleRegisterInput}/>
                </div>
                <Button value='Create'/>
            </form>

        </div></div>

    )
}