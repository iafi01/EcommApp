import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HeadFood from '../Components/HeadFood.js';
import { StyleSheet, Text, View,ScrollView,ImageBackground } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,Drawer, ListItem,List,Content,Button } from 'native-base';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ProductDetail({route,navigation}) {
    const {image} = route.params;
    const {title} = route.params;
    const {description} = route.params;
    const {prezzo} = route.params;
    return(
        <View>
            <HeadFood navigation={navigation}/>
            <ImageBackground style={styles.background} source={image}>
            <View style={styles.info}>
                <Text style={styles.TextA}>{title} {description} </Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.TextB}>€{prezzo}</Text>
            </View>
            <Button success style={styles.add}><Text style={styles.TextC}>Aggiungi +</Text></Button>
            <StatusBar style="light" backgroundColor="blue" navigation={navigation}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        
        height:'100%',
        marginTop:70,
        resizeMode: "cover",
        justifyContent: "flex-start",
    },
    add:{
        margin:20,
        width:100,
        justifyContent:'center',
    },
    TextC:{
        color:'white',
        fontSize:17,
        fontWeight:'bold',
    },
    info:{

        marginTop:25,
        height:'15%',
        marginLeft:15,
        width:'45%',
        backgroundColor:'white',
        borderRadius:20,
        padding:10,
    },
    price:{
        
        marginTop:-110,
        height:'15%',
        marginLeft:'52%',
        width:'45%',
        backgroundColor:'white',
        borderRadius:20,
        padding:10,
    },
});
