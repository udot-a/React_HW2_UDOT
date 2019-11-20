import React from 'react';
import './App.css';
export default class ButtonOnClass extends  React.Component{
    state = {
        value:0
    }
    clickHandler = e => {
        e.preventDefault()

        // this.props.incrementCurrentValue()
        this.setState( {value:this.state.value+1}, () => console.log('CLICK!!!'))
    }
    render(){
        return (
            <button onClick={this.clickHandler}>{this.state.value}</button>
        )
    }
}
// export default () => {
//  let [currentValue, setCurrentValue] = React.useState(0)
//     const clickHandler = e => {
//         e.preventDefault()
//         setCurrentValue(currentValue+1)
//
//     }
//     return <button onClick={clickHandler}>{currentValue}</button>
// }
//
