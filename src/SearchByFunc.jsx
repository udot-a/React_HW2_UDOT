import React from 'react';
import './main.css';


export default () => {
 let [currentValue, setCurrentValue] = React.useState('')
    const typeButton = e => {
        e.preventDefault()
        setCurrentValue(e.target.value.replace(/[^\w ]/g, ''))

    }
    return (
        <div className="searchinput">
            <i className="fas fa-search"></i>
            <input type="search" className="search" onChange={typeButton} value = {currentValue}></input>
            <a href="#"><i className="fas fa-keyboard"></i></a>
            <a href="#"><i className="fas fa-microphone-alt"></i></a>
        </div>

    )

    {/*<button onClick={clickHandler}>{currentValue}</button>*/}
}

