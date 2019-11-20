import React from 'react';
import './App.css';

export default () => {
 let [value, setCurrentValue] = React.useState(0)
    const clickHandler = e => {
        e.preventDefault()
        setCurrentValue(value+1)

    }
    return <input value={value} onChange={e => {
    setCurrentValue(e.target.value.toLocaleUpperCase())}
    }/>
}

