import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Container,Header,Left,Body,Right,Icon,Drawer, ListItem } from 'native-base';

export default function Sidebar() {

    return(
        <Container>
            <List>
                <ListItem>
                    <Text>Food</Text>
                </ListItem>

                <ListItem>
                    <Text>Drink</Text>
                </ListItem>
            </List>
        </Container>
    );
}