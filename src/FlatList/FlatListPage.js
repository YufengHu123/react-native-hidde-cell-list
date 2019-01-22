import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import HiddeListView from '../../hidde-cell-list'
import CommUtil from "../util/CommUtil";

export default class FlatListPage extends Component {

    constructor(props) {
        super(props)
        this.state={}
        this.dataArr = [

                    {
                        item: 'item1',
                        key: 11
                    },
                    {
                        item: 'item2',
                        key: 12
                    },
                    {
                        item: 'item1',
                        key: 21
                    },
                    {
                        item: 'item2',
                        key: 22
                    },
                    {
                        item: 'item1',
                        key: 31
                    },
                    {
                        item: 'item2',
                        key: 32
                    }


        ];

    }
    render() {
        return (
            <View
                style={styles.contentStyle}
            >
                <HiddeListView
                    extraData={this.state}
                    style={{
                        // width: CommUtil.screenWidth,
                        backgroundColor:'#efefef',
                        flex:1
                    }}
                    data={this.dataArr}
                    useFlatList={true}
                    disableRightSwipe={true}
                    renderItem={(rowData, rowMap) => (
                        this._renderItem(rowData, rowMap)
                    )}
                    //render cell hidden row
                    renderHiddenItem={(data, rowMap) => (
                        this._renderHiddeItem(data, rowMap)
                    )}

                    renderGroupHeader={(sectionData) => {
                        console.log('section_header');
                        console.log(sectionData.section);
                        return this._renderGroupHeaderView();
                    }}
                    listHeaderView={()=>{
                        return  this._renderListHeader()
                    }
                    }
                    rightOpenValue={-75}
                />

            </View>
        )
    }

    /**
     * 渲染cell
     * @return {*}
     * @private
     */
    _renderItem = () => {
        return (
            <View
                style={{
                    width: CommUtil.width,
                    height: 80,
                    backgroundColor:'white',
                    paddingLeft:20,
                    marginTop:5,
                    flexDirection: 'row',
                    alignItems:'center'
                }}
            >
                <Text>
                    我是cell组
                </Text>
            </View>
        )
    }
    _renderListHeader=()=>{
        return (
            <View
                style={{
                    marginTop:5,
                    height: 80,
                    width:CommUtil.width,
                    backgroundColor:'gray',
                    alignItems:'center',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight:10
                    }}
                >
                    <Text>
                        我是头部视图
                    </Text>
                </View>
            </View>
        )
    }
    /**
     * 渲染隐藏行
     * @return {*}
     * @private
     */
    _renderHiddeItem = () => {
        return (
            <View
                style={{
                    marginTop:5,
                    height: 80,
                    width:CommUtil.width,
                    backgroundColor:'red',
                    alignItems:'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}
            >
                <View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight:10
                    }}
                >
                    <Text>
                        删除
                    </Text>
                </View>
            </View>
        )
    }

    /**
     * 渲染组头
     * @return {*}
     * @private
     */
    _renderGroupHeaderView=()=>{
        return (
            <View
                style={{
                    width: CommUtil.width,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'red'
                }}
            >
                <Text>
                    我是组头
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
