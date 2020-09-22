import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,Dimensions } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,H3 } from 'native-base';

import HeadFood from '../Components/HeadFood.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
let height = Dimensions.get('window').height;

let Burger = require(`../assets/burger.jpg`);
let Bevanda = require(`../assets/bevanda.jpg`);
let Pizza = require(`../assets/pizza.jpg`);
let Pane = require(`../assets/pane.jpg`);


export default function FoodScreen({route,navigation}) {
    let title=route.params.title;
    let description=route.params.description;
    return (
    <TouchableOpacity>
      <View style={styles.FoodItemView}>

          <View style={styles.PriceView}>

                <Text style={styles.priceText}>€ 10.00</Text>

          </View>

          <View style={styles.FoodImageView}>

          <Image style={styles.img} source={Burger} />

          </View>

          <View style={styles.FoodDescriptionView}>

              <View style={styles.FoodTextView}>

                <Text style={styles.FoodTitle}>{title}</Text>
                <Text style={styles.FoodDescription}>{description}</Text>

              </View>

          </View>
      </View>
      </TouchableOpacity>
    );
  }
  const styles = StyleSheet.create({
    FoodItemView: {
        height:height/3,
    },
    img:{
    marginLeft:'6%',
    borderRadius:30,
    width:'54%',
    height:'70%',
    zIndex:1,
    marginTop:'14%',
    
    },
    PriceView:{
        borderRadius:30,
        position:"absolute",
        backgroundColor:'blue',
        width:'15%',
        height:'10%',
        zIndex:2,
        marginTop:'8%',
        marginLeft:'3%',
        justifyContent:'center',
        alignItems:'center',
    },
    priceText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',

    },
    FoodDescriptionView:{
        width:'58%',
        alignItems:'flex-end',
        paddingRight:30,
        backgroundColor:'white',
        borderRadius:30,
        position:'absolute',
        marginLeft:'42%',
        marginRight:10,
        marginTop:'10%',
        borderWidth:2,
        height:'50%',
    },
    FoodTitle:{
        fontWeight:'bold',
        fontSize:20,
        paddingLeft:'38%',
        paddingTop:'3%',
    },
    FoodDescription:{
        fontWeight:'bold',
        fontSize:13,
        paddingLeft:'35%', 
        textAlign:'center',
        paddingTop:'3%',
    },
  });