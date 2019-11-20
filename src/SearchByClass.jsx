import React from 'react';
import './main.css';
export default class SearchByClass extends  React.Component{
    state = {
        value:''
    }
    typeButton = e => {
        e.preventDefault()
        this.setState( {value:e.target.value.replace(/[^\w ]/g, '')})
    }
    render(){
        return (
            <div className="searchinput">
                <i className="fas fa-search"></i>
                <input type="search" className="search" onChange={this.typeButton} value = {this.state.value}></input>
                <a href="#"><i className="fas fa-keyboard"></i></a>
                <a href="#"><i className="fas fa-microphone-alt"></i></a>
            </div>
        )
    }
}
