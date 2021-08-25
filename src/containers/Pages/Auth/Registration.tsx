import React from 'react';
import SignupForm from '../../../components/User/SignupForm'
import {CabinetLayout} from '../../Layouts';

export function Registration() {
    return (
        <CabinetLayout authorization={false} notAuthorize={true}>
            <section className="content">
                <h1>Reg page</h1>
                <SignupForm/>
            </section>
        </CabinetLayout>
    );
}
