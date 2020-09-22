import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Container,Header,Left,Body,Right,Icon } from 'native-base';

import Head from './Components/Head.js';
import HeadFood from './Components/HeadFood.js';
import MenuList from './Components/MenuList.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import FoodScreen from './screen/FoodScreen.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

let Burger = require(`./assets/burger.jpg`);
let Bevanda = require(`./assets/bevanda.jpg`);
let Pizza = require(`./assets/pizza.jpg`);
let Pane = require(`./assets/pane.jpg`);

function Home({route,navigation}) {
  return (
    <ScrollView style={styles.container}>
    <Head/>
    

    <TouchableOpacity onPress={()=> navigation.navigate('FoodScreen',{categoria:'Burger',image:{Burger}})}>
        <MenuList categoria="Burger" image={Burger}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('FoodScreen',{categoria:'Pizza',image:{Burger}})}>
        <MenuList categoria="Pizza" image={Pizza}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('FoodScreen',{categoria:'Pane',image:{Burger}})}> 
        <MenuList categoria="Pane" image={Pane}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('FoodScreen',{categoria:'Bevanda',image:{Burger}})}> 
        <MenuList categoria="Bevanda" image={Bevanda}/>
    </TouchableOpacity>
    <StatusBar style="light" backgroundColor="blue" />
    
    </ScrollView>
  );
}


export default function App() {
  const Stack = createStackNavigator();
return (
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown: false,animationEnabled:false}} initialRouteName={'Home'}>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="HeadFood" component={HeadFood} />
  <Stack.Screen name="FoodScreen" component={FoodScreen} />
</Stack.Navigator>
</NavigationContainer>
);
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor:'blue',
  },
  iconleft:{
    color:'white',
    marginLeft:12,
  },
  iconright:{
    color:'white',
    marginRight:12,
  },
  title:{
    color:'white',
    fontSize:20,
    marginLeft:90,
    
  }
});
