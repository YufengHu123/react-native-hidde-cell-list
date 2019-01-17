import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import React from 'react'
import FlatListPage from './FlatList/FlatListPage'
import SectionListPage from "./SectionList/SectionListPage";
import tabIcon from './Resource'
import {
    Image
} from 'react-native'



const flatListNav = createStackNavigator(
    {
        home:{
            screen:FlatListPage
        }
    }
);

const aa = createAppContainer(flatListNav);
//
// const sectionListNav = createStackNavigator({
//         sectionList: {
//             screen: SectionListPage
//         },
//
//     },
//     {
//         initialRouteName: "sectionList"
//     }
//     )
//
// const bb = createAppContainer(sectionListNav);

const RootTab = createBottomTabNavigator({
        FlatList: FlatListPage,
        Settings: SectionListPage,
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
