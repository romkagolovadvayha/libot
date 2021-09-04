import React from 'react';
import {CabinetLayout} from '../../Layouts';
import BotsList from '../../../components/Cabinet/Bots/BotsList';

export function Bots() {
    return (
        <CabinetLayout title="Мои боты" authorization={true} notAuthorize={false} h1="Мои боты">
            <BotsList/>
        </CabinetLayout>
    );
}
