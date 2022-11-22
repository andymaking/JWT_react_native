import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from "../Screens/SettingsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MomentScreen from "../Screens/MomentScreen";
import MessageScreen from "../Screens/MessageScreen";
import CustomDrawer from "./CustomDrawer";
import {AntDesign, Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const AppStack = () => {

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {marginLeft: -25},
                drawerActiveBackgroundColor: '#AD40AF',
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: '#000'
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name='home-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="person-outline" size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Moment" component={MomentScreen} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name='timer-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Message" component={MessageScreen} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="ios-chatbubble-ellipses-outline" size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{
                drawerIcon: ({color}) => (
                    <AntDesign name="setting" size={22} color={color}/>
                )
            }}/>
        </Drawer.Navigator>
    )
}
