import React, {useContext, useState} from "react";
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AuthContext} from "../context/AuthContext";
import SafeAreaView from "react-native-safe-area-view";
import styles from "../component/styles";
import {AntDesign} from "@expo/vector-icons";
import CustomSwitch from "../component/CustomSwitch";
import {AppContext} from "../context/AppContext";
import ListItem from "../component/ListItem";


const HomeScreen = () => {

    const dataContext = useContext(AuthContext)

    const [gamesTab, getGamesTab] =useState(1)

    const [search, setSearch] = useState("")

    const dataContext2 = useContext(AppContext)
    const articles = dataContext2.articles;

    const onSelectSwitch = (value) =>{
        getGamesTab(value)
    }

    return (
        <SafeAreaView style={styles2.container}>
            <View style={styles2.flex}>
                <Text style={{fontSize: 18}}>Hello <Text>{dataContext.userToken}</Text></Text>
                <Image source={require('../../assets/Images/user.png')} style={{height:30, width: 30}}/>
            </View>
            <View style={styles2.input}>
                <AntDesign name="search1" size={20} color="grey" />
                <TextInput
                    style={{marginLeft: 10, flex: 1}}
                    placeholder={"Search"}
                    value={search}
                    onChangeText={(text)=> {
                        setSearch(text)
                        dataContext2.getNews(search)
                    }}
                    keyboardType={'name-phone-pad'}
                />
            </View>
            <View style={styles2.flex}>
                <Text style={{fontSize: 18}}>Upcoming games</Text>
                <TouchableOpacity>
                    <Text style={{color: '#AD40AF', fontWeight:'bold', fontSize: 15 }}>See all</Text>
                </TouchableOpacity>
            </View>
            <CustomSwitch
                  option1={"Free games"}
                  option2={"Paid game"}
                  selectionMode={1}
                  onSelectSwitch={onSelectSwitch}
            />
            {gamesTab===1 &&
                <FlatList
                    data={articles}
                    renderItem= {({item})=>
                        <ListItem
                            urlToImage={item.urlToImage}
                            author = {item.author}
                            title = {item.title}
                        />}
                    keyExtractor={(item)=>item.title}
                    showsVerticalScrollIndicator={false}
                />
            }
            {gamesTab!==1 && <Text>Paid games</Text>}
        </SafeAreaView>
    );
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    flex:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input:{
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderWidth: 0.2,
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignItems: "center"
    },
});
export  default HomeScreen;
