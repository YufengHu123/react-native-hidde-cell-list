import React, {Component} from 'react'
import RootApp from './RootTab'
import store from './store'
export  default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <RootApp/>
        )
    }

}
