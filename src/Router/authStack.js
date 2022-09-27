import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../Screens/Login';
import Register from '../Screens/Register';


const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
          }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
    }
}

const AuthStack = createStackNavigator(screens,
    {
        initialRouteName: 'Login'
    }
    );

export default AuthStack;
