import React, {useContext} from "react";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AuthContext} from "../context/AuthContext";
import {Ionicons} from "@expo/vector-icons";

const CustomDrawer = (props) => {
    const dataContext = useContext(AuthContext)
    const name = dataContext.userToken;

    const signOut = () =>{
        dataContext.logout()
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#AD40AF'}}>
                <ImageBackground source={require('../../assets/Images/purple.jpg')} style={{paddingVertical: 10}}>
                    <Image source={require('../../assets/Images/user.png')}  style={{width: 80, height: 80, borderRadius: 40, marginBottom: 10, alignSelf: 'center'}}/>
                    <Text style={{fontSize: 17, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>{name}</Text>
                </ImageBackground>
                <View style={{backgroundColor: 'white', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{borderTopWidth: 1, borderTopColor: '#AD40AF', paddingVertical: 15 }}>
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 15}}>
                        <Ionicons name={'share-social-outline'} size={22} />
                        <Text style={styles2.flex}>Tell a friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={signOut}>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 15}}>
                        <Ionicons name={'exit-outline'} size={22} color={'red'} />
                        <Text style={[styles2.flex, {color: 'red'}]}>Sign out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
    flex:{
        fontSize: 15,
        marginLeft: 5,
        fontWeight: 'bold'
    }
});

export default CustomDrawer
