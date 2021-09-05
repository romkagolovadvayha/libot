import axios from 'axios';

import {
    API_CREATE_USER,
    API_GET_CURRENT_USER,
    API_LOGIN_USER,
    API_GET_BOTS,
    API_ADD_BOTS,
} from './urls';

export default {
    place: {
        user: {
            add: (login: string, password: string, fullname: string, email: string, recaptcha: string) =>
                axios.post(API_CREATE_USER, {
                    login,
                    password,
                    fullname,
                    email,
                    recaptcha
                }, {headers: {"X-Token": localStorage.token}}),
            login: (login: string, password: string, recaptcha: string) =>
                axios.post(API_LOGIN_USER, {login, password, recaptcha}, {headers: {"X-Token": localStorage.token}}),
            getCurrentUser: () =>
                axios.get(`${API_GET_CURRENT_USER}`, {headers: {"X-Token": localStorage.token}}),
        },
        bots: {
            getBots: () =>
                axios.get(`${API_GET_BOTS}`, {headers: {"X-Token": localStorage.token}}),
            addBot: (name: string, apiKey: string) =>
                axios.post(API_ADD_BOTS, {name, apiKey}, {headers: {"X-Token": localStorage.token}}),
        },
    },
};