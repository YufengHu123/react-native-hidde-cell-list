import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import React, {Component} from 'react'
import FlatListPage from './FlatList/FlatListPage'

import tabIcon from './Resource'

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    Image
} from 'react-native'
import SectionListPage from "./SectionList/SectionListPage";
const RootTab = createBottomTabNavigator({
        FlatList: FlatListPage,
        Settings: SectionListPage,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'FlatList') {

                    iconName = focused? tabIcon.home_s: tabIcon.home_n;
                } else if (routeName === 'Settings') {
                    iconName = focused? tabIcon.mine_s: tabIcon.mine_n;
                }
                return <Image source={iconName}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(RootTab);
