import React, {useContext, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from "../component/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import {Button, SocialIcon} from "@rneui/base";
import { FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';
import {AuthContext} from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/src";


const Register = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [firstName, setFName] = useState("");
    const [lastName, setLastname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [securePass, setSecurePass] = useState(true);
    const [confirmSecurePass, setConfirmSecurePass] = useState(true);

    const dataContext = useContext(AuthContext);

    const navigations = () => {
      navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={styles2.container}>
            <Spinner visible={dataContext.isLoading} color={'#AD40AF'} size={70} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingHorizontal: 20, marginVertical: 30}}>
                    <Image style={{height: 200, width: 200, alignSelf:'center', transform:[{rotate: '-5deg'}]}} source={require('../../assets/Images/SignUp.jpg')} />
                    <Text style={styles.header}>Sign Up</Text>
                    <View style={styles.input}>
                        <AntDesign name="profile" size={20} color="black" />
                        <TextInput
                            style={{marginLeft: 10, flex: 1}}
                            placeholder={"Enter first name"}
                            value={firstName}
                            onChangeText={(text)=>setFName(text)}
                            keyboardType={'name-phone-pad'}
                        />
                    </View>
                    <View style={styles.input}>
                        <AntDesign name="profile" size={20} color="black" />
                        <TextInput
                            style={{marginLeft: 10, flex: 1}}
                            placeholder={"Enter last name"} v
                            alue={lastName}
                            onChangeText={(text)=>setLastname(text)}
                            keyboardType={'name-phone-pad'}
                        />
                    </View>
                    <View style={styles.input}>
                        <Feather name="phone" size={20} color="black" />
                        <TextInput
                            style={{marginLeft: 10, flex: 1}}
                            placeholder={"Enter phone number"}
                            value={phoneNumber}
                            onChangeText={(text)=>setPhoneNumber(text)}
                            keyboardType={'phone-pad'}
                        />
                    </View>
                    <View style={styles.input}>
                        <MaterialCommunityIcons name="email-send-outline" size={20} color="black" />
                        <TextInput
                            style={{marginLeft: 10, flex: 1}}
                            placeholder={"Enter Email"}
                            value={email}
                            onChangeText={(text)=>setEmail(text)}
                            keyboardType={'email-address'}
                        />
                    </View>
                    <View style={[styles.input, {justifyContent: 'space-between' }]}>
                        <MaterialCommunityIcons name="form-textbox-password" size={20} color="black" />
                        <TextInput secureTextEntry={securePass} style={{marginLeft: 10, flex: 1}} placeholder={"Enter Password"} value={password} onChangeText={(text)=>setPassword(text)}/>
                        <TouchableOpacity onPress={()=>setSecurePass(!securePass)} style={{height: 22, width: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesome5 name={securePass===true? "eye-slash": "eye"} size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.input, {justifyContent: 'space-between' }]}>
                        <MaterialCommunityIcons name="form-textbox-password" size={20} color="black" />
                        <TextInput
                            secureTextEntry={confirmSecurePass}
                            style={{marginLeft: 10, flex: 1}}
                            placeholder={"Confirm Password"}
                            value={confirmPassword}
                            onChangeText={(text)=>setConfirmPassword(text)}
                        />
                        <TouchableOpacity onPress={()=>setConfirmSecurePass(!confirmSecurePass)} style={{height: 22, width: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesome5 name={confirmSecurePass===true? "eye-slash": "eye"} size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                    <Button onPress={()=>{
                        dataContext.register(navigations() ,firstName, lastName, email, phoneNumber, password, confirmPassword)
                    }} title={'Sign up'} buttonStyle={{height: 50, borderRadius: 5, backgroundColor: '#AD40AF'}} />
                    <Text style={{marginVertical: 10, textAlign: 'center', color: '#666'}}>Or, sign up with...</Text>
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
                            Already have an account? </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text style={{alignSelf: 'center', fontWeight: "700", fontSize: 17, color: '#AD40AF'}}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
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
export  default Register;
