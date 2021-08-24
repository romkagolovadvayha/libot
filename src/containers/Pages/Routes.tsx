import {ComponentType} from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {Home} from './Home';
import {Registration, Login} from './Auth';

interface Route {
    link: string;
    title: string;
    code: string;
    isHeaderMenu: boolean;
    component: ComponentType<RouteComponentProps> | ComponentType;
}

export const Pages: Array<Route> = [
    {
        link: '/',
        title: 'Главная страница',
        code: 'home',
        isHeaderMenu: true,
        component: Home,
    },
    {
        link: '/registration',
        title: 'Регистрация',
        code: 'registration',
        isHeaderMenu: true,
        component: Registration,
    },
    {
        link: '/login',
        title: 'Авторизация',
        code: 'login',
        isHeaderMenu: false,
        component: Login,
    },
];
