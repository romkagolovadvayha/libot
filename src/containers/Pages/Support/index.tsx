import React from 'react';
import {CabinetLayout} from '../../Layouts';

export function Support() {
    return (
        <CabinetLayout title="Служба поддержка" authorization={true} notAuthorize={false} h1="Служба поддержки">
            <section className="content">
                <h1>Support page</h1>
            </section>
        </CabinetLayout>
    );
}
