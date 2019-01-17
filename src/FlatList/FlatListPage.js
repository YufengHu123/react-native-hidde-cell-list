import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class FlatListPage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View
                style={styles.contentStyle}
            >
                <Text
                style={styles.textStyle}
                >
                    FlatList View
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentStyle: {
        flex: 1,
        backgroundColor: '#fefefe'
    },
    textStyle:{
        color:'red',
        fontSize:18
    }
})
