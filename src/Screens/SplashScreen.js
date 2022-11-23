import React from "react";
import {ActivityIndicator, View} from "react-native";

const SplashScreen =()=> {
    return(
        <View style={{flex:1, justifyContent: "center", alignContent: 'center', backgroundColor: '#ffffff'}}>
            <ActivityIndicator size={70} color='#AD40AF' />
        </View>
    )
}

export default SplashScreen;
