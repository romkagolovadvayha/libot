import axios from 'axios';

import {
    API_CREATE_USER,
    API_GET_CURRENT_USER,
    API_LOGIN_USER,
} from './urls';

const token = localStorage.token;

const headers = {
    'X-Token': token,
};
export default {
    place: {
        user: {
            add: (login: string, password: string, fullname: string, email: string, recaptcha: string) =>
                axios.post(API_CREATE_USER, {login, password, fullname, email, recaptcha}, {headers}),
            login: (login: string, password: string, recaptcha: string) =>
                axios.post(API_LOGIN_USER, {login, password, recaptcha}, {headers}),
            getCurrentUser: () =>
                axios.get(`${API_GET_CURRENT_USER}`, {headers}),
        },
    },
};