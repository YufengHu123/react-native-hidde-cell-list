import {createBottomTabNavigator} from 'react-navigation'
import React,{Component} from 'react'
import FlatListPage from './FlatList/FlatListPage'
import {
    Text,
    View
}from 'react-native'
import SectionListPage from "./SectionList/SectionListPage";
export default class RootTab extends Comment{
    constructor(props){
        super(props)
    }
    render(){
        return(
           createBottomTabNavigator({
               FlatList:FlatListPage,
               SectionList:SectionListPage
           })
        )
    }
}
