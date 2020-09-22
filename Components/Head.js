import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container,Header,Left,Body,Right,Icon } from 'native-base';
export default function Head({navigation}) {
    
    return (
<Container style={styles.container}>
    <Header style={styles.header}>
      <Left>
      <Icon style={styles.iconleft} type="Ionicons" name="menu" />
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