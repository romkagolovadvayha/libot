import React, {ComponentType} from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {Home} from './Home';
import {Registration, Login} from './Auth';
import Logout from './Auth/Logout';

interface Route {
    link: string;
    title: string;
    code: string;
    component: ComponentType<RouteComponentProps> | ComponentType;
}

export const Pages: Array<Route> = [
    {
        link: '/',
        title: 'Главная страница',
        code: 'home',
        component: Home,
    },
    {
        link: '/registration',
        title: 'Регистрация',
        code: 'registration',
        component: Registration,
    },
    {
        link: '/logout',
        title: 'Выход',
        code: 'logout',
        component: Logout,
    },
    {
        link: '/login',
        title: 'Авторизация',
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