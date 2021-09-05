import React from 'react';
import {CabinetLayout} from '../../../Layouts';
import AddBotForm from '../../../../components/Cabinet/Bots/AddBotForm';

export function AddBot() {
    return (
        <CabinetLayout title="Добавить бота" authorization={true} notAuthorize={false} h1="Добавить бота" back="/bots">
            <AddBotForm/>
        </CabinetLayout>
    );
}
