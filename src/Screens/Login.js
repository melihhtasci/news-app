import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import loginstyle from '../Styles/LoginStyles.js';

import firebase from 'react-native-firebase'

const { width: MYWIDTH } = Dimensions.get('window');

const Login = ({ navigation }) => {

    const [username, setusername] = useState(false);
    const [password, setpassword] = useState(false);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function test() {
        console.log(firebase.firestore().collection("user"));
    }

    const checkinputs = () => {
        if (email == "" || pass == "") {
            alert("bilgiler bos gecilemez");
            test();
        }
        else {
            navigation.navigate('App');
        }
    }

    return (
        <ImageBackground style={loginstyle.container} source={{ uri: 'https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80' }}>
            <View>
                <Icon name='at' style={loginstyle.icon} size={20} color="#fff" />
                <TextInput onFocus={() => setusername(true)} onBlur={() => setusername(false)}
                    style={username == true ? ([loginstyle.textinput, loginstyle.focus]) : ([loginstyle.textinput, loginstyle.blur])}
                    underlineColorAndroid='transparent' placeholder='Email' placeholderTextColor='white'
                    onChangeText={text => { setEmail(text); }}></TextInput>
            </View>
            <View>
                <Icon name='key-outline' style={loginstyle.icon} size={20} color="#fff" />
                <TextInput onFocus={() => setpassword(true)} onBlur={() => setpassword(false)}
                    style={password == true ? ([loginstyle.textinput, loginstyle.focus]) : ([loginstyle.textinput, loginstyle.blur])}
                    underlineColorAndroid='transparent' placeholder='Şifre' placeholderTextColor='white'
                    value={pass}
                    onChangeText={text => { setPass(text); }}></TextInput>
            </View>
            <View>
                <TouchableHighlight style={loginstyle.buttonLogin} underlayColor='#f4802480' onPress={() => checkinputs()}>
                    <Text style={{ textAlign: "center", lineHeight: 45, color: 'white', fontWeight: 'bold' }}>Giriş</Text>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight style={loginstyle.buttonRegister} underlayColor="#c8ea917a" onPress={() => navigation.navigate('Register')}>
                    <Text style={{ textAlign: "center", lineHeight: 45, color: 'white', fontWeight: 'bold' }}>Hemen kayıt ol!</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )

}

export default Login;