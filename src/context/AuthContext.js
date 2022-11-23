import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../config";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";
import {ToastAndroid} from "react-native";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [splashLoading, setSplashLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState({})

    const register = (navigation, firstname, lastname, email, phone, password, confirmPassword) =>{
        setIsLoading(true)
        const data = {
            'first_name': firstname, 'last_name': lastname, 'email': email, 'phone_number': phone, 'amount': '1000', 'reference':'109874654', 'password': password, 'password_confirmation' : confirmPassword
        }
        axios.post(BASE_URL+'api/card', data).then(res =>{
            let userInfo = res.data;
            console.log(userInfo)
            let userInfo2 = JSON.stringify(userInfo)
            let userInfo3 = JSON.parse(userInfo2);
            if(userInfo2){
                setUserToken(userInfo3.token)
            }
            navigation()
            setIsLoading(false)
            ToastAndroid.show(userInfo3.message, ToastAndroid.LONG)
        }).catch(e=>{
            console.log(`registration error `+e)
            setIsLoading(false)
        })
    }

    const login = async (email, password) =>{
        setIsLoading(true)
        const data = {
            'email': email, 'password': password,
        }
        axios.post(BASE_URL+'api/login', data).then(async res => {
            let userInfo = res.data;
            setUserInfo(userInfo)
            AsyncStorageNative.setItem('userInfo', JSON.stringify(userInfo))
            console.log(userInfo)
            let userInfo2 = await AsyncStorageNative.getItem('userInfo')
            let userInfo3 = JSON.parse(userInfo2);
            if(userInfo2){
                setUserToken(userInfo3.token)
            }
            setIsLoading(false)
            ToastAndroid.show(userInfo3.message, ToastAndroid.LONG)
        }).catch(e=>{
            console.log(`registration error `+e)
            ToastAndroid.show(e, ToastAndroid.LONG)
            setIsLoading(false)
        })
    }

    const logout =() =>{
        setIsLoading(true)
        AsyncStorageNative.removeItem('userInfo')
        setUserInfo({})
        setUserToken(null)
        setIsLoading(false)
    }

    useEffect(()=> {
        isLoggedIn();
    }, [])

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true)
            let userInfo2 = await AsyncStorageNative.getItem('userInfo')
            userInfo2=JSON.parse(userInfo2);

            if(userInfo2){
                setUserInfo(userInfo2)
                setUserToken(userInfo2.token)
            }
            setSplashLoading(false)
        } catch (e) {
            setSplashLoading(false)
            console.log(`is logged in error ${e}`)
        }
    }

    return(
        <AuthContext.Provider value={{isLoggedIn, userInfo, login, isLoading,splashLoading, userToken, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}
