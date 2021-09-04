import React from 'react';
import ProfileLink from '../../ProfileLink';
import ST from "./styles";
import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

export function Presenter() {

    return (
        <ST.List>
            <ST.Item>
                {/*<NavLink to='/logout'>Выход</NavLink>*/}
            </ST.Item>
        </ST.List>
    );
}