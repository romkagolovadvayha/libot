import React from 'react';
import {CabinetLayout} from "../../Layouts";
import LoginForm from '../../../components/User/LoginForm'

export function Login() {
    return (
        <CabinetLayout authorization={false} notAuthorize={true}>
            <section className="content">
                <h1>Login page</h1>
                <LoginForm/>
            </section>
        </CabinetLayout>
    );
}
