import React from 'react';
import './App.css';

export default class InputClass extends React.Component {
    state={
        value:0
    }
    render(){
    return (
        <input value={this.state.value} onChange={e =>
        this.setState({value: e.target.value.toLocaleUpperCase()})
        }
    />
    )
    }
}

