import React, { useState, useEffect } from 'react';
import { AppRegistry, Platform, StatusBar, Button,Alert,Dimensions } from 'react-native';
import { name as appName } from './app.json';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import App from './src/App';
import Headline from './src/Screens/Headline';
import Login from './src/Screens/Login'

import HomeStack from './src/Router/homeStack';
import AuthStack from './src/Router/authStack';

const MainApp = createSwitchNavigator(
    {
        app: HomeStack,
        auth:AuthStack
    },
    {
        initialRouteName:'auth'
    }
)

const AppNavigator = createAppContainer(MainApp);

AppRegistry.registerComponent(appName, () => AppNavigator);

