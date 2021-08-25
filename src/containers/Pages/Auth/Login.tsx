import React from 'react';
import {LoginLayout} from "../../Layouts";
import LoginForm from '../../../components/User/LoginForm'
import {NavLink} from "react-router-dom";

export function Login() {
    return (
        <LoginLayout authorization={false} notAuthorize={true}>
            <section className="content">
                <h1>Login page</h1>
                <LoginForm/>
                <NavLink
                    to="/registration"
                    activeClassName="active"
                    className="item"
                >Регистрация</NavLink>
            </section>
        </LoginLayout>
    );
}
// попробовать токен в стейт засунуть