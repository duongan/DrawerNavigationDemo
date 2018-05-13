import React, { Component } from 'react';
import {  View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from "react-native-vector-icons/Ionicons";

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <IOSIcon name="ios-menu" size={30} color="#000" />
                </TouchableOpacity>
            ),
            headerStyle: {
                paddingRight: 10,
                paddingLeft: 10
            }
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Welcome to Home Screen </Text>
            <Button
                title='Go to Details'
                onPress={() => navigate('Details')} />
        </View>
        );
    }
}
