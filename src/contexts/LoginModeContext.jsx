import { createContext, useContext, useState } from "react";

const loginContext = createContext({
    newUserLogin: null,
    logInAcc: () => {},
    logoutAcc: () => {},
})

export default loginContext;

export function LoginContextProvider({children},newUserLogin){

    function logInAcc(e,newUserLogin) {
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
            } else if( response.status === 404){
                alert('Usuario no registrado')
            } else if(response.status === 401){
                alert('Usuario o password incorrectas')
            }
        })
    }

    const value = {
        newUserLogin,
        logInAcc
    }

    return (
        <loginContext.Provider value={value}>{children}</loginContext.Provider>
    )
}

export function useLoginContext(){
    return useContext(loginContext)
}