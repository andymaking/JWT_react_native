import React, {createContext, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../config";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [splashLoading, setSplashLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const login = () =>{
        console.log(userToken)
        setUserToken("Bring it on")
        console.log(userToken)
    }

    return(
        <AuthContext.Provider value={{login, isLoading,splashLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}
