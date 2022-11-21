import { Platform, PlatformColor, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding:16,
        flex: 1,
    },
    input:{
        marginBottom: 20,
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignItems: "center"
    },
    navigationContainer:{
        padding: 20,
    },
    label:{
        padding: 20,
        ...Platform.select({
            ios:{
                color: PlatformColor('label'),
                backgroundColor: PlatformColor('system')
            },
            android:{
                color: PlatformColor('?android:attr/textColor'),
                backgroundColor: PlatformColor('@android:color/holo_blue_bright')
            }
        })
    },
    hint:{
        color:'black',
        fontSize: 12,
        textAlign: 'left',
    },
    padding:{
        marginTop: 20,
        marginHorizontal: 20
    },
    item:{
        backgroundColor: "yellow",
        padding: 20,
        marginVertical: 10
    },
    header:{
        fontSize:25,
        fontWeight: "500",
        color: '#333',
        marginBottom: 30,
    },
    title:{
        fontSize: 25
    }
});

export default styles;
