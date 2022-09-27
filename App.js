import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, FlatList,
  SafeAreaView, ImageBackground, Dimensions,
  TouchableHighlight, Alert, Button
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
// import { observer } from "mobx-react/native";
// import _test from './App/_test';
import {observer} from 'mobx-react';

const App = observer(({ navigation }) => {

  const [isloading, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  });

  //   useEffect(() => {
  //     _test.dataLoaded = true;

  //     _test.authenticate().then(() => {
  //       _test.dataLoaded = false;
  //     })
  // }, [])


  const numColumns = 1;
  const titleWidth = Dimensions.get('window').width / numColumns;

  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";

  const dataSource = [
    { category: 'Teknoloji', query: 'technology', imageId: '1434494817513-cc112a976e36' },
    { category: 'Spor', query: 'sport', imageId: '1521412644187-c49fa049e84d' },
    { category: 'Sağlık', query: 'health', imageId: '1498837167922-ddd27525d352' },
    { category: 'Bilim', query: 'science', imageId: '1507413245164-6160d8298b31' },
    { category: 'İş Hayatı', query: 'business', imageId: '1462899006636-339e08d1844e' },
    { category: 'Eğlence', query: 'entertainment', imageId: '1536331148080-d164fc972561' },
    { category: 'Genel', query: 'general', imageId: '1484275367269-4e0b47b5afdd' },
    // { category: 'Sinema',    query:'', imageId: '1478720568477-152d9b164e26' },
    // { category: 'Hava',      query:'', imageId: '1530908295418-a12e326966ba' },
    // { category: 'Seyahat',   query:'', imageId: '1473625247510-8ceb1760943f' },
    // { category: 'Astroloji', query:'', imageId: '1532968961962-8a0cb3a2d4f5' },
    // { category: 'Otomobil',  query:'', imageId: '1537041373298-55dbb337e651' },
    // { category: 'Galeri',    query:'', imageId: '1500051638674-ff996a0ec29e' },
    // { category: 'Video',     query:'', imageId: '1524253482453-3fed8d2fe12b' },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate('Headline', { category: item.category, query: item.query })} >
        <ImageBackground
          source={{ uri: imageBaseUrl + item.imageId + imageParameters }}
          style={{
            width: '100%',
            height: 100,
            justifyContent: 'center'
          }}>
          <Text style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18
          }}>{item.category}</Text>
        </ImageBackground>
      </TouchableHighlight>

    );
  }

  return (

    <SafeAreaView>
      <View style={styles.container}>
        <AnimatedLoader
          visible={isloading}
          overlayColor="rgba(62, 34, 91,1)"
          source={require("./App/lego-loader.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
      </View>
      <FlatList style={{ backfaceVisibility: 'visible' }}
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
      />
    </SafeAreaView>
  );
});

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

export default App;
