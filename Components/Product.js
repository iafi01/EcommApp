import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,Drawer, ListItem,Button,Image } from 'native-base';


export default function Product(props) {
return(
<View style={styles.container}>
<Image style={styles.img} source={props.image}/>
<Text>Nome:{props.name} Categoria:{props.categoria}</Text>
</View>
);
}


const styles = StyleSheet.create({
    container: {
      height:'100%',
      width:'100%',
      
    },
    img:{
      width:70,
      height:70,
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