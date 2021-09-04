import React from 'react';
import ST from './styles';
import {NavLink} from "react-router-dom";
// @ts-ignore
import { ReactSVG } from 'react-svg'


const checkActive = (match: any, location: any) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
}

export function Presenter() {
    return (
        <ST.Container>
            <ST.List>
                <ST.Item>
                    <NavLink to='/' isActive={checkActive}>
                        <ReactSVG wrapper="span" src="/images/home.svg" />
                        <span>Домой</span>
                    </NavLink>
                </ST.Item>
                <ST.Item>
                    <NavLink to='/profile'>
                        <ReactSVG wrapper="span" src="/images/profile.svg" />
                        <span>Профиль</span>
                    </NavLink>
                </ST.Item>
                <ST.Item>
                    <NavLink to='/bots'>
                        <ReactSVG wrapper="span" src="/images/robot.svg" />
                        <span>Боты</span>
                    </NavLink>
                </ST.Item>
                <ST.Item>
                    <NavLink to='/history'>
                        <ReactSVG wrapper="span" src="/images/history.svg" />
                        <span>История</span>
                    </NavLink>
                </ST.Item>
                <ST.Item>
                    <NavLink to='/listings'>
                        <ReactSVG wrapper="span" src="/images/listings.svg" />
                        <span>Листинги</span>
                    </NavLink>
                </ST.Item>
                <ST.Item>
                    <NavLink to='/support'>
                        <ReactSVG wrapper="span" src="/images/support.svg" />
                        <span>Поддержка</span>
                    </NavLink>
                </ST.Item>
                <ST.Item>
                    <NavLink to='/settings'>
                        <ReactSVG wrapper="span" src="/images/settings.svg" />
                        <span>Настройки</span>
                    </NavLink>
                </ST.Item>
            </ST.List>
        </ST.Container>
    );
}
