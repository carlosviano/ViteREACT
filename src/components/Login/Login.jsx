import Button from '../Button/button'
import './Login.css'
import {useState} from 'react';


export default function Login(){

    const  [newUser, setNewUser] = useState({
        email:"",
        password:"",
        name:"",
        surname:""
       })

    function handleInput(e){
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
            } else if(response.status === 409){
                alert('Usuario ya registrado')
            }
         })
    }

    return (    
        <div className='mainContainer'> 
        <div className='login'>
        <form className='formLogin'>
            <h5>Login</h5>
            <div className='inputContainer'>
                <h6>Email</h6>
                <input type='text' name='email' className='loginInput'/>
            </div>
            <div className='inputContainer'>
                <h6>Password</h6>
                <input type='password' name='password'className='loginInput'/>
            </div>
            <Button value='Sign In'/>
        </form>
    </div>
            <div className='register'>
            <form className='formRegister' onSubmit={registerAcc}>
                <h5>Create Account</h5>
                <div className='inputContainer'>
                    <h6>First Name</h6>
                    <input type='text' className='registerInput' name='name' value={newUser.name} onChange={handleInput}/>
                </div>
                <div className='inputContainer'>
                    <h6>Last Name</h6>
                    <input type='text' className='registerInput' name='surname' value={newUser.surname} onChange={handleInput}/>
                </div>
                <div className='inputContainer'>
                    <h6>Email</h6>
                    <input type='text' className='registerInput' name='email' value={newUser.email} onChange={handleInput}/>
                </div>
                <div className='inputContainer'>
                    <h6>Password</h6>
                    <input type='password' className='registerInput' name='password' value={newUser.password} onChange={handleInput}/>
                </div>
                <Button value='Create'/>
            </form>

        </div></div>

    )
}