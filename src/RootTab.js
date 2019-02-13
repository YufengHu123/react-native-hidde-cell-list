import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import React,{
    useState
} from 'react'
import FlatListPage from './FlatList/FlatListPage'
import SectionListPage from "./SectionList/SectionListPage";
import tabIcon from './Resource'
import {
    Image
} from 'react-native'



const flatListNav = createStackNavigator(
    {
        A:{
            screen:FlatListPage
        }
    }
);
const sectionListNav = createStackNavigator({
        sectionList: {
            screen: SectionListPage,
            defaultNavigationOptions:{
                title:'sectionList'
            }
        },

    },
    {
        initialRouteName: "sectionList"
    }
    )

const RootTab = createBottomTabNavigator({
        FlatList: flatListNav,
        Settings: sectionListNav,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'FlatList') {
                    iconName = focused ? tabIcon.home_s : tabIcon.home_n;
                } else if (routeName === 'Settings') {
                    iconName = focused ? tabIcon.mine_s : tabIcon.mine_n;
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
