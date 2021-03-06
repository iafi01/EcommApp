import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Head from '../Components/Head.js';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,Drawer, ListItem,List,Content } from 'native-base';
import Product from '../Components/Product.js';

export default function Carrello({route,navigation}) {
    const {image} = route.params;
    const {categoria} = route.params;
    return(
        <View>
            <Head carrello="Carrello" navigation={navigation}/>
            <View style={styles.container}>
                <Content>
                    <Product nome="Tagliatelle" prezzo='10,99' descrizione='Buona' image={image} categoria={categoria} />
                    <Product nome="Tagliatelle" prezzo='10,99' descrizione='Buona' image={image} categoria={categoria} />
                    <Product nome="Tagliatelle" prezzo='10,99' descrizione='Buona' image={image} categoria={categoria} />
                    <Product nome="Tagliatelle" prezzo='10,99' descrizione='Buona' image={image} categoria={categoria} />
                    <Product nome="Tagliatelle" prezzo='10,99' descrizione='Buona' image={image} categoria={categoria} />
                
                </Content>
            
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
        height:260,
        width:'100%',
        backgroundColor:'blue',
    },
    total:{
        textAlign:'center',
        fontSize:20,
        color:'white',
    },
  });