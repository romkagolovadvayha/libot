import React from 'react';
import ST from './styles';
import {NavLink} from "react-router-dom";

export function Presenter() {
    return (
        <ST.Container>
            <ST.CopyRight>
                <ST.CopyRightLogo>
                    LISBOT<span>.RU</span>
                </ST.CopyRightLogo>
                <span>© 2021 Все права защищены</span>
            </ST.CopyRight>
            <ST.Contacts>
                <span>Возникли вопросы ?</span>
                <span>Задать его нашему специалисту</span>
                <NavLink to='/support'>Задать вопрос</NavLink>
            </ST.Contacts>
        </ST.Container>
    );
}
