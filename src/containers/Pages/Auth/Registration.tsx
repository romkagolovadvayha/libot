import React from 'react';
import SignupForm from '../../../components/User/SignupForm'
import {LoginLayout} from '../../Layouts';
import {NavLink} from "react-router-dom";

export function Registration() {
    return (
        <LoginLayout title="Регистрация" authorization={false} notAuthorize={true}>
            <section className="content">
                <h1>Reg page</h1>
                <SignupForm/>
                <NavLink
                    to="/login"
                    activeClassName="active"
                    className="item"
                >Войти</NavLink>
            </section>
        </LoginLayout>
    );
}
