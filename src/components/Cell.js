import React, {Component} from 'react'

export default class Cell extends Component{
    constructor(){
        super();
    }
    render(){
        return <td>{this.props.token}</td>
    }
}