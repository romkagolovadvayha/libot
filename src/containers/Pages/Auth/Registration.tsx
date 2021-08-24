import React from 'react';
import Signup from '../../../components/User/Signup'
import {AuthLayout} from '../../Layouts';

export function Registration() {
    return (
        <AuthLayout>
            <section className="content">
                <h1>Reg page</h1>
                <Signup/>
            </section>
        </AuthLayout>
    );
}
