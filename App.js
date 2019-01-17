/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import testFunc from 'react-native-hidde-cell-list'
// import HiddeListView from './hidde-cell-list'
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import RootTab from './src/RootTab'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.dataArr = [
            {
                title: 'Title1', key: 1, data: [
                    {
                        item: 'item1',
                        key: 11
                    },
                    {
                        item: 'item2',
                        key: 12
                    }

                ]
            },
            {
                title: 'Title2', key: 2, data: [
                    {
                        item: 'item1',
                        key: 21
                    },
                    {
                        item: 'item2',
                        key: 22
                    }]
            },
            {
                title: 'Title3', key: 3, data: [
                    {
                        item: 'item1',
                        key: 31
                    },
                    {
                        item: 'item2',
                        key: 32
                    }]
            }
        ];
    }

    render() {
        return (
            <View style={styles.container}>
                <RootTab/>
                {/*<HiddeListView*/}
                    {/*useSectionList={true}*/}
                    {/*disableRightSwipe={true}*/}
                    {/*renderItem={(rowData, rowMap) => {*/}
                        {/*return (*/}
                            {/*<View*/}
                                {/*style={{*/}
                                    {/*height: 50,*/}
                                    {/*width: Screen.width,*/}
                                    {/*backgroundColor: 'grap'*/}
                                {/*}}*/}
                            {/*>*/}
                            {/*</View>*/}
                        {/*);*/}
                    {/*}*/}
                    {/*}*/}
                    {/*sections={this.dataArr}*/}
                    {/*renderHiddenItem={(data, rowMap) => {*/}
                        {/*return(*/}
                            {/*<Text*/}
                            {/*style={{*/}
                                {/*color:'red'*/}
                            {/*}}*/}
                            {/*>*/}
                                {/*我是隐藏cell*/}
                            {/*</Text>*/}
                        {/*)*/}
                    {/*}}*/}
                {/*>*/}
                {/*</HiddeListView>*/}
            </View>
        )
    }
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });
