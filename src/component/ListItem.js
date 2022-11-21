import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Button} from "@rneui/base";

const ListItem = (props)=>{

    return(
        <View style={{marginTop: 10, flexDirection: "row", alignItems: 'center', flex:1}}>
            <Image
                source={{uri: props.urlToImage}}
                style={styles2.image}
            />
            <View style={{flex:1}}>
                <Text numberOfLines={1} style={{
                    color: '#333',
                    fontSize: 14,
                }}>
                    {props.author}
                </Text>
                <Text numberOfLines={1} style={{
                    color: '#333',
                    fontSize: 14,
                    textTransform: 'uppercase',
                }}>
                    {props.title}
                </Text>
            </View>
            <Button onPress={props.onPress} title={"play"} buttonStyle={{backgroundColor: '#0aada8', borderRadius: 10, width: 100, padding:10, height: 40, marginLeft: 10}}/>
        </View>
    )
}

const styles2 = StyleSheet.create({
    container: {
        marginBottom: 30,
        margin:5,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        elevation: 5,
        shadowRadius: 20,
        shadowOffset:{
            height: 5,
            width:5,
        },
        shadowColor:"#000",
        backgroundColor: '#fff',
    },
    image: {
        width: 55,
        borderRadius: 10,
        height: 55,
        marginRight: 8
    },
    data:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent:'space-between',
        maxWidth:'100%',
    },
    author:{
        fontWeight: 'bold',
    },
    date:{
        fontWeight: 'bold',
        color: '#e63946'
    },
    heading:{
        maxWidth: '70%',
    },
    source:{
        color:'#e63946',
    }
});

export default ListItem
