import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,Button } from 'native-base';
import Home from '../App.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HeadFood({route,navigation}) { 
    return (
<Container style={styles.container}>
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={()=> navigation.goBack()}>
      <Icon style={styles.iconleft} type="Ionicons" name="ios-arrow-back" />
      </Button>
      </Left>
      <Body><Text style={styles.title}>Ecomm</Text></Body>
      <Right><Icon style={styles.icons} type="FontAwesome" name="shopping-cart" style={styles.iconright}/></Right>
    </Header>
    </Container>
 );
}


const styles = StyleSheet.create({
    container: {
      height:'10%',
      
    },
    header:{
      backgroundColor:'blue',
      marginTop: 17,
      position:'relative',
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