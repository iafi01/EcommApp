import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,H3 } from 'native-base';

import HeadFood from '../Components/HeadFood.js';
import FoodItem from '../Components/FoodItem.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function FoodScreen({route,navigation}) {
  const {image} = route.params;
  const {categoria} = route.params;
  
    return (
    <ScrollView style={styles.container}>
    <HeadFood categoria={categoria} image={image} navigation={navigation}/>
    <FoodItem title="Panino caldo" description="Pane e pomodoro" prezzo='10,00' image={image} navigation={navigation} />
   <StatusBar style="light" backgroundColor="blue" />
  </ScrollView>
    
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
  