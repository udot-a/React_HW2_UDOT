import React from 'react';
import './main.css';
import Label from './Label'

export default (props) => {
    return (
        <footer>
            <div className="reklama">
                <Label name={'Реклама'}/>
                <Label name={'Для бизнеса'}/>
                <Label name={'Все о Google'}/>
            </div>
            <div className="condition">
                <Label name={'Конфиденциальность'}/>
                <Label name={'Условия'}/>
                <Label name={'Настройки'}/>
            </div>
        </footer>
)
}

