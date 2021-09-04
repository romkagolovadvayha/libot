import React from 'react';
import {CabinetLayout} from '../../Layouts';

export function History() {
    return (
        <CabinetLayout title="История транзакций" authorization={true} notAuthorize={false} h1="История транзакций">
            <p>Ваша история транзакций, к сожалению пуста.</p>
        </CabinetLayout>
    );
}
