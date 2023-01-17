import Button from '../Button/button'
import './Login.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(){

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
    
    const navigate = useNavigate();

    function handleLogInInput(e){
        const newLogIn = {
            ...newUserLogin,
            [e.target.name]: e.target.value
        }
        setNewUserLogin(newLogIn)
    }

    function logInAcc(e){
        console.log(newUserLogin)
        e.preventDefault();
        fetch('http://localhost:3000/user/login',{
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUserLogin)
        }).then((response) => {
            console.log(response.status);
            if(response.status === 400){
                alert('Error al recibir el body')
            } else if(response.status === 200){
                alert('Te has logeado correctamente');
                setNewUserLogin({
                    email:"",
                    password:""
                })
                navigate('/')
            } else if( response.status === 404){
                alert('Usuario no registrado')
            } else if(response.status === 401){
                alert('Usuario o password incorrectas')
            }
        })
    }



    return (    
        <div className='mainContainer'> 
        <div className='login'>
        <form className='formLogin' onSubmit={logInAcc}>
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