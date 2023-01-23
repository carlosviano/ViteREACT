import { createContext, useContext, useState } from "react";

const loginContext = createContext({
    authorization:null,
    newUserLogin: null,
    logInAcc: () => {},
    logOutAcc: () => {},
})

export default loginContext;

const MY_AUTH_APP = 'MY_AUTH_APP'

export function LoginContextProvider({children},newUserLogin){

   const [authorization, setAuthorization] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? null)

   async function logInAcc(e,newUserLogin) {
        console.log(newUserLogin)
        e.preventDefault();
       const response = await fetch('http://localhost:3000/user/login',{
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUserLogin)
        })
        if (response.status === 200) {
            const token = await response.json();
            setAuthorization(token)
            window.localStorage.setItem(MY_AUTH_APP,token.jwt)
          } else {
            alert("Email o password incorrectos");
          }
    }

    function logOutAcc(){
        window.localStorage.removeItem(MY_AUTH_APP)
        setAuthorization(null)
    }
    console.log(authorization)

    const value = {
        newUserLogin,
        logInAcc,
        authorization,
        logOutAcc
    }

    return (
        <loginContext.Provider value={value}>{children}</loginContext.Provider>
    )
}

export function useLoginContext(){
    return useContext(loginContext)
}