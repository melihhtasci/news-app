import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import App from '../App';
import Headline from '../Screens/Headline';
import Login from '../Screens/Login';

const screens = {
    App: {
        screen: App,
        navigationOptions: {
            title: 'Haber Kategorileri',
            headerRight: () => (
                <View style={{ flexDirection: "row" }}>
                    <TouchableHighlight onPress={() => alert("Uygulama hakkında bilgi")}>
                        <Icon name='information-outline' size={25} color="#000" style={{ marginRight: 10 }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                        <Icon name='login' size={25} color="#000" style={{ marginRight: 10 }} />
                    </TouchableHighlight>
                </View>
            ),
        }
    },
    Headline: {
        screen: Headline
    },
}
Headline.navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params && navigation.state.params.category} Haberleri`,
});

const HomeStack = createStackNavigator(screens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#020202',
                alignContent: 'center',

            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                flex: 1
            }
        }
    });

export default HomeStack;
