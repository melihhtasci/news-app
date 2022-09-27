import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList, View, Image, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedLoader from 'react-native-animated-loader';

import PrettyTime from '../Tool/prettyTime';

const Headline = ({ navigation }) => {

    const [isloading, setloader] = useState(true);


    const query = navigation.state.params && navigation.state.params.query;

    const [headlines, setHeadlines] = useState({});
    const api = 'https://newsapi.org/v2/top-headlines?';
    const country = 'tr';
    const category = 'technology';
    const apiKey = '06b9e2e8bde64655ae297fdda4b6f239';
    useEffect(() => {
        console.log(query + "," + isloading);
        fetchData();
    }, [])

    async function fetchData() {
        let url = api + 'country=' + country + '&category=' + query + '&apiKey=' + apiKey;
        console.log(url);
        (await fetch(url))
            .json()
            .then(res => setHeadlines(res))
            .then(setTimeout(() => { setloader(false) }, 1000));
    }

    const clearTitle = (title) => {
        if (title == null || title.indexOf('-') < 0) return title;

        var parts = title.split('-');
        parts.pop();
        return parts.join();

        // let baseTitle = title.split('-', 1);
        // return baseTitle;
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => Alert.alert(item.title)}>
                <View style={{
                    flex: 1, flexDirection: 'row', padding: 10,
                    borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee'
                }}>
                    <Image style={{ height: 100, width: 100, borderRadius: 10 }} source={{ uri: item.urlToImage }}></Image>
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                        <Text style={{ flexWrap: 'wrap', color: '#000', fontWeight: 'bold' }}>{clearTitle(item.title)}</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name='rss' size={15} color="#000" />
                                <Text style={{ color: '#000' }}>{item.source.name}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: '#000' }}>{PrettyTime(item.publishedAt)}</Text>
                                <Icon name='clock' size={15} color="#000" style={{ padding: 2 }} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <AnimatedLoader
                    visible={isloading}
                    overlayColor="rgba(62, 34, 91,1)"
                    source={require("../Images/lego-loader.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                />
            </View>

            <FlatList
                data={headlines.articles}
                renderItem={renderItem}
                keyExtractor={(item) => item.title} 
            />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    lottie: {
        width: 200,
        height: 200,
    },
});

export default Headline;
