import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

export default function CustomSwitch({ selectionMode, option1, option2, onSelectSwitch }){

    const [getSelectMode, setSelectMode] = useState(selectionMode)

    const updateSwitchData = (value) =>{
        setSelectMode(value);
        onSelectSwitch(value)
    }

    return(
        <View style={{
            height: 44,
            width: '100%',
            marginTop: 10,
            backgroundColor: '#e4e4e4',
            borderRadius: 10,
            borderColor: '#AD40AF',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>updateSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectMode === 1? '#AD40AF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{
                    color: getSelectMode === 1? 'white' : '#AD40AF',
                    fontSize: 14,
                }}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>updateSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectMode === 2? '#AD40AF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{
                    color: getSelectMode === 2? 'white' : '#AD40AF',
                    fontSize: 14,
                }}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}
