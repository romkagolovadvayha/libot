import React from 'react';
import {CabinetLayout} from '../../Layouts';

export function Profile() {
    return (
        <CabinetLayout title="Мой профиль" authorization={true} notAuthorize={false}>
            <section className="content">
                <h1>профиль page</h1>
            </section>
        </CabinetLayout>
    );
}
