import React from 'react';
import './main.css';
import google from './images/argentina-elections-2019-5167565079838720-2x.png'
import './fontawesome-free-5.10.2-web/css/all.css'
import Button from "./Button";
import SearchByClass from "./SearchByClass";
import SearchByFunc from "./SearchByFunc";

export default (props) => {
    return (
        <main>
            <div className="googleimg">
                <img src={google} alt="GOOGLE" className="image"></img>
            </div>
            <SearchByClass/>
            {/*<SearchByFunc/>*/}
            <div className="buttons">
                <Button name={"Поиск в Google"}/>
                <Button name={"Мне повезет!"}/>
            </div>
        </main>

)
}

