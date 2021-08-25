import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {getPage} from '../../containers/Pages/Routes';
import ProfileLink from './ProfileLink';

export function HeaderNav() {

    let linkList = [
        getPage('home'),
        getPage('logout')
    ];


    return (
        <ul>
            {linkList.map((page: any, index: any) => (
                <li key={page.code}>
                    <NavLink
                        to={page.link}
                        activeClassName="active"
                        className="item"
                    >
                        {page.title}
                    </NavLink>
                </li>
            ))}
            <li>
                <ProfileLink/>
            </li>
        </ul>
    );
}