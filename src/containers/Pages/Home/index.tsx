import React from 'react';
import {CabinetLayout} from '../../Layouts';

export function Home() {
    return (
        <CabinetLayout authorization={true} notAuthorize={false}>
            <section className="content">
                <h1>Home page</h1>
            </section>
        </CabinetLayout>
    );
}
