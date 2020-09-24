import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Drawer, ListItem, Button } from 'native-base';


export default function Product(props) {
  return (
    <View style={styles.productView}>
      <Image style={styles.img} source={props.image} />
      <View style={styles.infoProd}>
        <View style={styles.xView}>
      <Button style={styles.xButton} danger><Text style={styles.xTXTButton}>X</Text></Button>
        <Text style={styles.title}>{props.categoria}</Text>
        </View>
        <Text style={styles.body}>{props.nome} €{props.prezzo} {"\n"} Descrizione: {props.descrizione}</Text>
        
        <Text style={styles.quantity}>
          <Icon type="AntDesign" style={styles.quantity} name="left" /> 
          1 
          <Icon type="AntDesign" style={styles.quantity} name="right" />
          </Text>
          </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

  },
  xView:{
    flexDirection:'row',
    
  },
  xButton:{
    borderRadius:30,
    width:30,
    height:30
  },
  xTXTButton:{
    color:'white',
    fontWeight:'bold',
    width:30,
    justifyContent:'center',
    textAlign:'center',
  },
  quantity: {
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  productView: {
    flexDirection: 'row',

  },
  body: {
    marginTop: 5,
    textAlign: 'center',
  },
  infoProd: {
    
    marginTop: 30,
    marginLeft: 20,
    alignContent: 'center',
    backgroundColor: '#e6e6ff',
    borderRadius: 15,
    width: '65%',
  },

  img: {
    marginTop: 30,
    width: 110,
    height: 110,
    borderRadius: 20,
  },
  header: {
    backgroundColor: 'blue',
  },
  iconleft: {
    color: 'white',
    marginLeft: 12,
  },
  iconright: {
    color: 'white',
    marginRight: 12,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    paddingLeft:'26%',


  }
});