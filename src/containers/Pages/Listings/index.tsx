import React from 'react';
import {CabinetLayout} from '../../Layouts';

export function Listings() {
    return (
        <CabinetLayout title="Листинги" authorization={true} notAuthorize={false} h1="Листинги">
            <section className="content">
                <p>Листинги в данный момент не доступны...</p>
            </section>
        </CabinetLayout>
    );
}
