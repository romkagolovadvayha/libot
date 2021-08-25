import React from 'react';
import {AuthLayout} from "../../Layouts";
import LoginForm from '../../../components/User/LoginForm'

export function Login() {
    return (
        <AuthLayout>
            <section className="content">
                <h1>Login page</h1>
                <LoginForm/>
            </section>
        </AuthLayout>
    );
}
