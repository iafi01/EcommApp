import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Drawer } from 'native-base';

import ProductDetail from './screen/ProductDetail.js';
import Head from './Components/Head.js';
import HeadFood from './Components/HeadFood.js';
import MenuList from './Components/MenuList.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodScreen from './screen/FoodScreen.js';
import Carrello from './screen/Carrello.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

let Burger = require(`./assets/burger.jpg`);
let Bevanda = require(`./assets/bevanda.jpg`);
let Pizza = require(`./assets/pizza.jpg`);
let Pane = require(`./assets/pane.jpg`);

function Home({ route, navigation }) {
  closeDrawer = () => { drawer._root.close(); }
  openDrawer = () => { drawer._root.open(); }
  return (


    <View style={styles.container}>
      <ScrollView>
        <Head navigation={navigation} />

        <MenuList categoria="Burger" image={Burger} navigation={navigation} />


        <MenuList categoria="Pizza" image={Pizza} navigation={navigation} />


        <MenuList categoria="Pane" image={Pane} navigation={navigation} />


        <MenuList categoria="Bevanda" image={Bevanda} navigation={navigation} />

        <StatusBar style="light" backgroundColor="blue" navigation={navigation} />

      </ScrollView>
    </View>
  );
}


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }} initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
        <Stack.Screen name="Carrello" component={Carrello} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
  },
  iconleft: {
    color: 'white',
    marginLeft: 12,
  },
  iconright: {
    color: 'white',
    marginRight: 12,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: 90,

  }
});
