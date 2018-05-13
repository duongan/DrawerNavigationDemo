import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabNav from './TabNav';

const DrawerNav = DrawerNavigator(
    {
        DrawerItem1: {
            screen: TabNav,
            navigationOptions: {
                drawerLabel: "Drawer Item 1",
                drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
            },
        }
    }
);

export default DrawerNav;