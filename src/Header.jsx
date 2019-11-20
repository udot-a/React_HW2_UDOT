import React from 'react';
import './main.css';
import Label from './Label'
import avatar from './images/simpson.jpg'
import './fontawesome-free-5.10.2-web/css/all.css'

export default (props) => {
    return (
        <header>
            <Label name={'Почта'}/>
            <Label name={'Картинки'}/>
            <a href="#"><i className="fas fa-th"></i></a>
            <a href="#"><img src={avatar} alt="avatar" className="avatar"></img></a>
        </header>

)
}

