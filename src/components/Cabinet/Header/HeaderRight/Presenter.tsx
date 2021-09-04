import React from 'react';
import ProfileLink from '../../ProfileLink';
import ST from "./styles";
import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

export function Presenter() {

    return (
        <ST.List>
            <ST.Item>
                <ProfileLink/>
            </ST.Item>
            <ST.Item>
                <NavLink to='/logout'>
                    <ReactSVG wrapper="span" src="/images/logout.svg" />
                    <span>Выход</span>
                </NavLink>
            </ST.Item>
        </ST.List>
    );
}