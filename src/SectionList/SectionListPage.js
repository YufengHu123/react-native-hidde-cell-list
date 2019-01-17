import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class SectionListPage extends Component {

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
                    SectionList View
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
