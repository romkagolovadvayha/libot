import React, {ComponentType} from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {Home} from './Home';
import Bots from './Bots';
import {AddBot} from './Bots/Add';
import {Settings} from './Settings';
import {Support} from './Support';
import {Profile} from './Profile';
import {Listings} from './Listings';
import {History} from './History';
import {Registration, Login} from './Auth';
import Logout from './Auth/Logout';

interface Route {
    link: string;
    code: string;
    component: ComponentType<RouteComponentProps> | ComponentType;
}

export const Pages: Array<Route> = [
    {
        link: '/',
        code: 'home',
        component: Home,
    },
    {
        link: '/history',
        code: 'history',
        component: History,
    },
    {
        link: '/listings',
        code: 'listings',
        component: Listings,
    },
    {
        link: '/profile',
        code: 'profile',
        component: Profile,
    },
    {
        link: '/support',
        code: 'support',
        component: Support,
    },
    {
        link: '/settings',
        code: 'settings',
        component: Settings,
    },
    {
        link: '/bots',
        code: 'bots',
        component: Bots,
    },
    {
        link: '/bots/add',
        code: 'addBot',
        component: AddBot,
    },
    {
        link: '/registration',
        code: 'registration',
        component: Registration,
    },
    {
        link: '/logout',
        code: 'logout',
        component: Logout,
    },
    {
        link: '/login',
        code: 'login',
        component: Login,
    },
];

export function getPage(code: string) {
    return Pages.find(page => {
        if (page.code === code) {
            return page;
        }
    });
}