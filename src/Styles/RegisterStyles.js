
import { StyleSheet,Dimensions } from 'react-native';

const { width: MYWIDTH } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        width: MYWIDTH - 80,
        height: 45,
        paddingLeft: 45,
        borderBottomColor: 'black',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderWidth: 1,
        marginTop: 20,
        color: 'black'
    },
    focus: { borderBottomColor: 'orange', borderWidth: 3 },
    blur: { borderBottomColor: 'black', },
    icon: {
        position: 'absolute',
        top: 30,
        left: 10,
        zIndex: 999,
        color:'black'
    },
    buttonComplete: {
        width: MYWIDTH - 150,
        height: 45,
        borderRadius: 25,
        fontWeight: '800',
        fontSize: 16,
        backgroundColor: '#c8ea91bf',
        borderColor: 'grey',
        marginTop: 20,
        lineHeight: 45,
        textAlign: 'center'
    },
    buttonDon: {
        width: MYWIDTH - 150,
        height: 45,
        borderRadius: 25,
        fontWeight: '800',
        fontSize: 16,
        borderColor: 'black',
        marginTop: 20,
        lineHeight: 45,
        textAlign: 'center',
    },
    buttonText: {
        marginTop:50,
        width: MYWIDTH - 150,
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#fff'
    }
});