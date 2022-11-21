import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthStack} from "./AuthStack";
import {AppStack} from "./AppStack";

export const Navigation = ()=>{

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <AuthStack/>
            {/*<AppStack/>*/}
        </NavigationContainer>
    )
}
