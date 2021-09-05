import React, {useEffect, useState} from 'react';
import {CabinetLayout} from "../../Layouts";
import BotsList from "../../../components/Cabinet/Bots/BotsList";
import {Bot} from '../../../models/bot';

interface Props {
    getBots: any;
    getBotsLoader: boolean;
    bots: Bot[];
}

export function Presenter(props: Props) {
    const {getBots, getBotsLoader, bots} = props;
    useEffect(() => {
        getBots();
    }, []);

    return (
        <CabinetLayout title="Мои боты" authorization={true} notAuthorize={false} h1="Мои боты">
            <BotsList bots={bots} getBotsLoader={getBotsLoader}/>
        </CabinetLayout>
    );
}