import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../Styles/RegisterStyles.js'

const { width: MYWIDTH } = Dimensions.get('window');

const Login = ({ navigation })=> {

    const [username, setusername] = useState(false);
    const [password, setpassword] = useState(false);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
    const checkinputs = ()=>{
        if(email=="" || pass ==""){
            alert("bilgiler bos gecilemez");
        }
        else    {
            navigation.navigate('Login');
        }
    }

    return (
        <ImageBackground style={style.container} source={{ uri: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80' }}>
            <View>
                <Icon name='at' style={style.icon} size={20} color="#fff" />
                <TextInput onFocus={() => setusername(true)} onBlur={() => setusername(false)} 
                style={username == true ? ([style.textinput, style.focus]) : ([style.textinput, style.blur])} 
                underlineColorAndroid='transparent' placeholder='Email' placeholderTextColor='black'
                onChangeText={text=>{setEmail(text);}}></TextInput>
            </View>
            <View>
                <Icon name='key-outline' style={style.icon} size={20} color="#fff" />
                <TextInput onFocus={() => setpassword(true)} onBlur={() => setpassword(false)} 
                style={password == true ? ([style.textinput, style.focus]) : ([style.textinput, style.blur])} 
                underlineColorAndroid='transparent' placeholder='Şifre' placeholderTextColor='black'
                value={pass} 
                onChangeText={text=>{setPass(text);}}></TextInput>
            </View>
            <View>
                <Icon name='key-outline' style={style.icon} size={20} color="#fff" />
                <TextInput onFocus={() => setpassword(true)} onBlur={() => setpassword(false)} 
                style={password == true ? ([style.textinput, style.focus]) : ([style.textinput, style.blur])} 
                underlineColorAndroid='transparent' placeholder='Şifre' placeholderTextColor='black'
                value={pass} 
                onChangeText={text=>{setPass(text);}}></TextInput>
            </View>
            <View>
                <Icon name='key-outline' style={style.icon} size={20} color="#fff" />
                <TextInput onFocus={() => setpassword(true)} onBlur={() => setpassword(false)} 
                style={password == true ? ([style.textinput, style.focus]) : ([style.textinput, style.blur])} 
                underlineColorAndroid='transparent' placeholder='Şifre' placeholderTextColor='black'
                value={pass} 
                onChangeText={text=>{setPass(text);}}></TextInput>
            </View>
            <View>
                <Icon name='key-outline' style={style.icon} size={20} color="#fff" />
                <TextInput onFocus={() => setpassword(true)} onBlur={() => setpassword(false)} 
                style={password == true ? ([style.textinput, style.focus]) : ([style.textinput, style.blur])} 
                underlineColorAndroid='transparent' placeholder='Şifre' placeholderTextColor='black'
                value={pass} 
                onChangeText={text=>{setPass(text);}}></TextInput>
            </View>
            <View>
                <TouchableHighlight style={style.buttonComplete} underlayColor='#c8ea917a'  onPress={() => checkinputs()}>
                    <Text style={{textAlign:"center",lineHeight:45,color:'black',fontWeight:'bold'}}>Kayıt Ol</Text>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight style={style.buttonRegister} underlayColor="#c8ea917a" onPress={() => checkinputs()}>
                    <Text style={{textAlign:"center",lineHeight:45,color:'black',fontWeight:'800'}}>Giriş yapmak için...</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )

}

export default Login;