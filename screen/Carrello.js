import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Head from '../Components/Head.js';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,Drawer, ListItem,List,Content } from 'native-base';
import Product from '../Components/Product.js';

export default function Carrello({route,navigation}) {
    const {categoria} = route.params;
    const {image} = route.params;
    return(
        <View >
            <Head navigation={navigation}/>
            <View style={styles.container}>
                <Content><Product name="Tagliatelle" categoria={categoria} image={image}/></Content>
            
            <View style={styles.footercontainer}>
                <Text style={styles.total}>Totale:</Text>
            </View></View>
            <StatusBar style="light" backgroundColor="blue" navigation={navigation}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        marginTop:70,
        width:'100%',
        height:'100%',
    },
    footercontainer:{
        borderRadius:20,
        height:300,
        width:'100%',
        backgroundColor:'blue',
    },
    total:{
        textAlign:'center',
        fontSize:20,
        color:'white',
    },
  });