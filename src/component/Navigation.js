import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthStack} from "./AuthStack";
import {AppStack} from "./AppStack";
import {AuthContext} from "../context/AuthContext";
import {ActivityIndicator, View} from "react-native";
import {AppProvider} from "../context/AppContext";
import {SplashStack} from "./SplashStack";

export const Navigation = ()=>{

    const dataContext = useContext(AuthContext)
    const loading = dataContext.isLoading;
    const userToken = dataContext.userToken;
    const splashLoading = dataContext.splashLoading

    if (loading){
        return(
            <View style={{justifyContent:'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    return(
        <NavigationContainer>
            {
                splashLoading === true ? <SplashStack/> : userToken === null ? <AuthStack/> : <AppProvider><AppStack/></AppProvider>
            }

        </NavigationContainer>
    )
}
