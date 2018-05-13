import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './screens/Home';
import Details from './screens/Details';

const stackNav = StackNavigator(
    {
        Home: Home,
        Details: Details
    }
);

const TabNav = TabNavigator(
    {
        Tab1: {
            screen: stackNav,
            navigationOptions: {
                tabBarLabel: 'Tab 1',
                tabBarIcon: ({ tintColor }) => <Icon name="comments" size={25} color={tintColor} />
            }
        },
        Tab2: {
            screen: stackNav,
            navigationOptions: {
                tabBarLabel: 'Tab 2',
                tabBarIcon: ({ tintColor }) => <Icon name="compass" size={25} color={tintColor} />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: false
        },
        tabBarPosition: 'bottom'
    }
);

export default TabNav;