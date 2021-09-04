import React from 'react';
import {CabinetLayout} from '../../Layouts';

export function Settings() {
    return (
        <CabinetLayout title="Настройки" authorization={true} notAuthorize={false} h1="Настройки">
            <section className="content">
                <h1>Settings page</h1>
            </section>
        </CabinetLayout>
    );
}
