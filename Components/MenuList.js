import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodScreen from '../screen/FoodScreen.js';
let height = Dimensions.get('window').height;
export default function MenuList(props) {
    return (

        <TouchableOpacity onPress={() => props.navigation.navigate('FoodScreen', { categoria: props.categoria, image: props.image })}>
            <View>
                <View style={styles.blockimg}>

                    <Image style={styles.img} source={props.image} blurRadius={2} />

                </View>
                <View style={styles.blocktext}>
                    <Text style={styles.text}> {props.categoria} </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    block: {

        position: 'relative',
        color: 'white',
        fontSize: 70,
        height: height / 2,
    },
    img: {

        width: 420,
        height: 300,
    },
    blocktext: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    text: {
        fontSize: 27,
        borderWidth: 2,
        borderColor: 'white',
        marginLeft: '20%',
        marginRight: '20%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 14,
        backgroundColor: 'blue',
    },
});
