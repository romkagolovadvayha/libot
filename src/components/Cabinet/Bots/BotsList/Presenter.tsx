import React from 'react';
import Table from '../../../styles/components/table';
import {Bot} from '../../../../models/bot';
import STButton from '../../../styles/components/button';
import styled from "@emotion/styled";
import {Button} from "../../../Atoms";

interface Props {
    bots: Bot[];
    getBotsLoader: boolean;
}
const AddButton = styled(STButton.LinkAction)`
  margin-top: .5rem;
`;

export function Presenter(props: Props) {
    const {bots, getBotsLoader} = props;
    if (getBotsLoader) {
        return <>Загрузка...</>;
    }
    return (
        <>
            <Table.Container>
                <Table.Header>
                    <Table.HeaderItemList>
                        <Table.HeaderItem>#</Table.HeaderItem>
                        <Table.HeaderItem>Название</Table.HeaderItem>
                        <Table.HeaderItem>Тариф (руб/месяц)</Table.HeaderItem>
                        <Table.HeaderItem>Дата создания</Table.HeaderItem>
                        <Table.HeaderItem>Активность</Table.HeaderItem>
                    </Table.HeaderItemList>
                </Table.Header>
                <Table.Body>
                    {bots.map((bot: Bot) =>
                        <Table.BodyItemList key={bot.id}>
                            <Table.BodyItem>{bot.id}</Table.BodyItem>
                            <Table.BodyItem>{bot.settings.hasOwnProperty('name') && bot.settings.name}</Table.BodyItem>
                            <Table.BodyItem>{bot.settings.hasOwnProperty('tarif') && bot.settings.tarif + ' руб'}</Table.BodyItem>
                            <Table.BodyItem>{bot.create_date}</Table.BodyItem>
                            <Table.BodyItem>
                                {bot.active == 1 ? 'Остановить' : 'Запустить'}
                            </Table.BodyItem>
                        </Table.BodyItemList>)}
                </Table.Body>
            </Table.Container>
            <AddButton to='/bots/add'>Добавить</AddButton>
        </>
    );
}
