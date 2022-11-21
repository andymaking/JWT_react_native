import React, {useContext, useState} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from "../component/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import {Button, SocialIcon} from "@rneui/base";
import {AuthContext} from "../context/AuthContext";


const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dataContext = useContext(AuthContext);


    return (
        <SafeAreaView style={styles2.container}>
            <View style={{paddingHorizontal: 20}}>
                <Image style={{height: 200, width: 200, alignSelf:'center', transform:[{rotate: '-5deg'}]}} source={require('../../assets/Images/login.jpg')} />
                <Text style={styles.header}>Login</Text>
                <View style={styles.input}>
                    <MaterialCommunityIcons name="email-send-outline" size={24} color="black" />
                    <TextInput style={{marginLeft: 10}} placeholder={"Enter Email"} value={email} onChangeText={(text)=>setEmail(text)}/>
                </View>
                <View style={[styles.input, {justifyContent: 'space-between' }]}>
                    <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
                    <TextInput secureTextEntry={true} style={{marginLeft: 10, flex: 1}} placeholder={"Enter Password"} value={password} onChangeText={(text)=>setPassword(text)}/>
                    <TouchableOpacity style={{alignItems: 'flex-end'}}>
                        <Text style={{fontWeight: "700", fontSize: 17, color: '#AD40AF'}}>Forgot?</Text>
                    </TouchableOpacity>
                </View>
                <Button onPress={()=> {
                    console.log('Go home')
                    dataContext.login();
                }}
                        title={'Log in'}
                        buttonStyle={{height: 50, borderRadius: 5, backgroundColor: '#AD40AF'}}
                />
                <Text style={{marginVertical: 10, textAlign: 'center', color: '#666'}}>Or, log in with...</Text>
                <View style={styles2.flex}>
                    <TouchableOpacity>
                        <SocialIcon type='google' raised={false} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SocialIcon type='facebook' raised={false}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SocialIcon type='twitter' raised={false}  />
                    </TouchableOpacity>
                </View>
                <View style={styles2.flex}>
                    <Text style={{marginVertical: 10, textAlign: 'center', color: '#666'}}>
                        New to this App? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text style={{alignSelf: 'center', fontWeight: "700", fontSize: 17, color: '#AD40AF'}}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
    flex:{
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: "center"
    }
});
export  default Login;
