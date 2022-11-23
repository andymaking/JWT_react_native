import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../Screens/SplashScreen";

export const SplashStack = ()=>{

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={'Splash'} component={SplashScreen} />
        </Stack.Navigator>
    )
}
