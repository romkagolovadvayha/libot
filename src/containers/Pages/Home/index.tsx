import React from 'react';
import {CabinetLayout} from '../../Layouts';

export function Home() {
    return (
        <CabinetLayout title="Личный кабинет" authorization={true} notAuthorize={false} sidebar={true}>
            <section className="content">
                <h1>Home page</h1>
            </section>
        </CabinetLayout>
    );
}
